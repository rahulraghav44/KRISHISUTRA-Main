from fastapi import FastAPI, HTTPException
import joblib
import pandas as pd
import numpy as np
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import requests 
from typing import List, Dict, Any
from shapely.geometry import shape, mapping
import geopandas as gpd


# Load model, encoders, and scaler
model = joblib.load("api\CPModel.pkl")
label_encoders = joblib.load("api\LEncoder.pkl")
# scaler = joblib.load("scaler.pkl")

data = pd.read_csv("api\sorted_crop_data.csv")
waterData= pd.read_csv("api\crop_water_requirement_UP_v2.csv")

# FastAPI app
app = FastAPI()

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to restrict frontend access
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Load GeoJSONs
india_gdf = gpd.read_file("dist/IndiaDist.json")
up_districts = india_gdf[india_gdf["ST_NM"] == "Uttar Pradesh"]

reservoirs = gpd.read_file("frontend/public/data/reservoirregion.geojson")
hydro_layer_1 = gpd.read_file("frontend/public/data/hydo_p1_UP.geojson")
hydro_layer_2 = gpd.read_file("frontend/public/data/hydro_p2_UP.geojson")

supported_districts = [
   "Agra", "Bareilly", "Gorakhpur", "Jhansi", "Kanpur", "Lucknow", "Meerut", "Prayagraj", "Varanasi"
]

# Define request model
class PredictionRequest(BaseModel):
    district: str
    season: str

# Function to calculate suitability
def calculate_suitability(actual, required):
    return 100 - abs((actual - required) / required * 100)

# Encode nutrient levels
nutrient_mapping = {'Low': 1, 'Medium': 2, 'High': 3}
data['Nutrient Levels (NPK)'] = data['Nutrient Levels (NPK)'].map(nutrient_mapping)

# Add suitability columns
def add_suitability_columns(df):
    df['Suitability_pH'] = df.apply(lambda row: calculate_suitability(row['pH_x'], 6.5), axis=1)
    df['Suitability_Rainfall'] = df.apply(lambda row: calculate_suitability(row['Rainfall_Weather'], row['Rainfall_Crop']), axis=1)
    df['Suitability_Temperature'] = df.apply(lambda row: calculate_suitability(row['Temperature_Weather'], row['Temperature_Crop']), axis=1)
    df['Suitability_Nutrients'] = df.apply(lambda row: calculate_suitability(row['Nutrient Levels (NPK)'], row['Nutrient Levels (NPK)']), axis=1)
    return df

data = add_suitability_columns(data)

# Function to preprocess input
def preprocess_input(district, season):
    try:
        district_encoded = label_encoders['District'].transform([district])[0]
        season_encoded = label_encoders['Season'].transform([season])[0]
    except ValueError:
        return None, "Invalid District or Season!"

    suitability_input = {
        'District': [district_encoded],
        'Season': [season_encoded],
        'Suitability_pH': [data['Suitability_pH'].median() + np.random.uniform(-2, 2)],
        'Suitability_Rainfall': [data['Suitability_Rainfall'].median() + np.random.uniform(-5, 5)],
        'Suitability_Temperature': [data['Suitability_Temperature'].median() + np.random.uniform(-1, 1)],
        'Suitability_Nutrients': [data['Suitability_Nutrients'].median()]
    }

    return pd.DataFrame(suitability_input), None

# API Route for Prediction
@app.post("/predict")
async def predict(request: PredictionRequest):
    district = request.district
    season = request.season

    if not district or not season:
        raise HTTPException(status_code=400, detail="District and Season are required!")

    user_input, error = preprocess_input(district, season)
    if error:
        raise HTTPException(status_code=400, detail=error)

    # Predict
    predicted_probs = model.predict_proba(user_input)[0]
    top_5_indices = np.argsort(predicted_probs)[-10:][::-1][2:]
    top_5_crops = model.classes_[top_5_indices]

    # Fetch suitability info
    output_list = []
    for crop in top_5_crops:
        crop_info = data[data['Crop Name'] == crop].iloc[0]
        water_info1 = waterData[waterData['Crop'] == crop] 
        crop2= crop_info['Compatible Crops']
        water_info2 = waterData[waterData['Crop'] == crop2] 
        wr1 =water_info1.iloc[0]['Water Requirement (mm)']  
        wr2 =water_info2.iloc[0]['Water Requirement (mm)']
        tr =wr1 + wr2
       
        output_list.append({
            "Predicted Crop": crop,
            "Compatible Crops": crop_info['Compatible Crops'],
            "Water Requirement": int(tr)
        })

    return {"predictions": output_list}



# ✅ Request schema
class AreaRequest(BaseModel):
    polygon: Dict[str, Any]
    season: str



# ✅ Format intersected hydro layers
def extract_hydro_features(gdf, source: str, color: str):
    features = []
    for _, row in gdf.iterrows():
        geometry = row.get("geometry")
        if geometry is None or geometry.is_empty:
            continue
        properties = {
            "name": row.get("name") or row.get("region") or source,
            "source": source,
            "color": color
        }
        features.append({
            "geometry": mapping(geometry),
            "properties": properties
        })
    return features

# ✅ Main API
@app.post("/get-crops-in-area")
def get_crops_in_area(req: AreaRequest):
    selected_polygon = shape(req.polygon)

    # ✅ Intersecting districts
    matching_districts = up_districts[up_districts.intersects(selected_polygon)]
    matching_districts = matching_districts[matching_districts["DISTRICT"].isin(supported_districts)]
    results = []

    for _, district_row in matching_districts.iterrows():
        district_name = district_row["DISTRICT"]
        geometry = mapping(district_row["geometry"])
        #crop_output = your_ml_model(district_name, req.season)
        res =requests.post("http://127.0.0.1:8000/predict",json={"district": district_name, "season": req.season})
        crop_output=res.json()
        
        # Create district tile
        district_tile = {
            "district": district_name,
            "geometry": geometry,
            "crops": [],
            "hydrological": []  # Add hydrological data here
        }

        for prediction in crop_output["predictions"]:
            district_tile["crops"].append({
                "predicted_crop": prediction["Predicted Crop"],
                "compatible_crop": prediction["Compatible Crops"],
                "water_requirement": prediction["Water Requirement"]
            })

        # ✅ Get intersecting hydrological features for this district
        district_shape = shape(district_row["geometry"])
        reservoirs_filtered = reservoirs[reservoirs.intersects(district_shape)]
        hydro1_filtered = hydro_layer_1[hydro_layer_1.intersects(district_shape)]
        hydro2_filtered = hydro_layer_2[hydro_layer_2.intersects(district_shape)]

        hydro_features = (
            extract_hydro_features(reservoirs_filtered, "reservoirs", "blue") +
            extract_hydro_features(hydro1_filtered, "ponds", "green") +
            extract_hydro_features(hydro2_filtered, "lakes", "purple")
        )

        district_tile["hydrological"] = hydro_features
        results.append(district_tile)

    return {
        "tiles": results
    }


# Run FastAPI app using Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
