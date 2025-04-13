# -*- coding: utf-8 -*-
"""
Optimized Crop Prediction for Multiple Crops
"""

import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Sample dataset with nutrient levels in 'low', 'medium', 'high'
data = pd.read_csv("sorted_crop_data.csv")

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

# Encode categorical variables
label_encoders = {}
for col in ['Season', 'District']:
    le = LabelEncoder()
    data[col] = le.fit_transform(data[col])
    label_encoders[col] = le

# Apply scaling
scaler = StandardScaler()
scaled_cols = ['Rainfall_Crop', 'Temperature_Crop', 'pH_x', 'Nutrient Levels (NPK)']
data[scaled_cols] = scaler.fit_transform(data[scaled_cols])

# Features & Target
X = data[['District', 'Season', 'Suitability_pH', 'Suitability_Rainfall', 'Suitability_Temperature', 'Suitability_Nutrients']]
y = data['Crop Name']

# Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=48)

# Train Model
model = RandomForestClassifier(n_estimators=100, random_state=48)
model.fit(X_train, y_train)

'''
# Save the model, encoders, and scaler
joblib.dump(model, "CPModel.pkl")
joblib.dump(label_encoders, "LEncoder.pkl")
joblib.dump(scaler, "scaler_new_1.pkl")






# Accuracy
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")



'''
import joblib
import numpy as np
import pandas as pd

# Load the trained model, label encoders, and scaler
model = joblib.load("CPModel.pkl")
label_encoders = joblib.load("LEncoder.pkl")
scaler = joblib.load("scaler_new_1.pkl")

# --- Optimized Prediction for User Input ---
district_input = 'Kanpur'
season_input = 'Summer'

# Encode inputs
district_encoded = label_encoders['District'].transform([district_input])[0]
season_encoded = label_encoders['Season'].transform([season_input])[0]

# Create input suitability features (mean values from dataset)


suitability_input = {
    'District': [district_encoded],
    'Season': [season_encoded],
    'Suitability_pH': [data['Suitability_pH'].median() + np.random.uniform(-2, 2)],  # Median ± small variation
    'Suitability_Rainfall': [data['Suitability_Rainfall'].median() + np.random.uniform(-5, 5)],
    'Suitability_Temperature': [data['Suitability_Temperature'].median() + np.random.uniform(-1, 1)],
    'Suitability_Nutrients': [data['Suitability_Nutrients'].median()]
}


suitability_df = pd.DataFrame(suitability_input)

# Predict top 5 suitable crops
predicted_probs = model.predict_proba(suitability_df)[0]
top_5_indices = np.argsort(predicted_probs)[-10:][::-1][2:]  # Get top 5 indices
top_5_crops = model.classes_[top_5_indices]  # Get crop names

# Fetch suitability info for these crops
output_list = []
for crop in top_5_crops:
    crop_info = data[data['Crop Name'] == crop].iloc[0]
    output_list.append({
        "Predicted Crop": crop,
        "Compatible Crops": crop_info['Compatible Crops']
    })

# Display results
print("Top 5 Predicted Crops with Suitability Info:")
for crop_data in output_list:
    print(crop_data)
