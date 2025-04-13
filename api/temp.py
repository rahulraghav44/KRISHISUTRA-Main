import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, classification_report
import matplotlib.pyplot as plt
import seaborn as sns
import matplotlib.patches as mpatches
import plotly.express as px

# Step 1: Load Datasets
train_data = pd.read_csv('C:/Users/rahul/krishi/data/Train Dataset.csv')
test_data = pd.read_csv('C:/Users/rahul/krishi/data/Test Dataset.csv')
soil_productivity = pd.read_csv('C:/Users/rahul/krishi/data/Soil Productivity.csv')
soil_slope = pd.read_csv('C:/Users/rahul/krishi/data/soil slope.csv')
rainfall_data = pd.read_csv('C:/Users/rahul/krishi/data/Yemmedoddi_1.csv')

# Step 2: Preprocess and Merge Environmental Data
def preprocess_and_merge(train_data, soil_productivity, soil_slope, rainfall_data):
    label_encoder = LabelEncoder()
    train_data['Crop_Encoded'] = label_encoder.fit_transform(train_data['Crop'])
    
    train_data['Productivity_Class'] = np.random.choice(soil_productivity['Classes'], len(train_data), replace=True)
    train_data['Slope_Class'] = np.random.choice(soil_slope['Class'], len(train_data), replace=True)
    train_data['Rainfall_Actual'] = np.random.choice(rainfall_data['ACTUAL(mm)'], len(train_data), replace=True)
    
    train_data['N_to_P'] = train_data['N'] / (train_data['P'] + 1e-5)
    train_data['K_to_pH'] = train_data['K'] / (train_data['pH'] + 1e-5)
    
    return train_data, label_encoder

train_data, label_encoder = preprocess_and_merge(train_data, soil_productivity, soil_slope, rainfall_data)

# Step 3: Train Random Forest Model
features = ['N', 'P', 'K', 'pH', 'rainfall', 'temperature', 'N_to_P', 'K_to_pH']
X = train_data[features]
y = train_data['Crop_Encoded']



# Step 4: Generate Grid for Visualization
def generate_grid(data):
    grid_size = int(np.sqrt(len(data)))
    grid_size = grid_size if grid_size**2 <= len(data) else grid_size - 1
    data = data.iloc[:grid_size**2].copy()

    data['X_Coordinate'] = np.tile(np.arange(grid_size), grid_size)
    data['Y_Coordinate'] = np.repeat(np.arange(grid_size), grid_size)
    
    return data, grid_size

grid_data, grid_size = generate_grid(train_data)

# Step 5: Assign Permaculture Zones
def assign_permaculture_zones(data, grid_size):
    center = (grid_size // 2, grid_size // 2)
    data['Distance'] = np.sqrt((data['X_Coordinate'] - center[0])*2 + (data['Y_Coordinate'] - center[1])*2)
    data['Permaculture_Zone'] = pd.cut(
        data['Distance'],
        bins=[-1, 1.5, 3, 6, 9, grid_size],
        labels=['Zone 0', 'Zone 1', 'Zone 2', 'Zone 3-4', 'Zone 5']
    )
    return data

grid_data = assign_permaculture_zones(grid_data, grid_size)

# Step 6: Assign Diverse Crops
np.random.seed(42)
crop_types = ['Wheat', 'Rice', 'Maize', 'Cotton', 'Pulses']
grid_data['Crop_Type'] = np.random.choice(crop_types, len(grid_data))

# Step 7: Simulate Efficiency and Yield
grid_data['Water_Use_Efficiency'] = np.random.uniform(50, 90, len(grid_data))  # %
grid_data['Fertilizer_Use_Efficiency'] = np.random.uniform(60, 95, len(grid_data))  # %
grid_data['Yield_Percentage'] = np.random.uniform(70, 100, len(grid_data))  # %

# Step 8: Assign Ecological Systems
ecological_zones = ['Forest Buffer', 'Wetland', 'Meadow', 'Riparian Zone']
grid_data['Ecological_System'] = np.random.choice(ecological_zones, len(grid_data))

# Visualization Functions
def visualize_permaculture_zones(data):
    zone_colors = {
        'Zone 0': 'red', 'Zone 1': 'orange', 
        'Zone 2': 'yellow', 'Zone 3-4': 'green', 'Zone 5': 'blue'
    }
    
    fig, ax = plt.subplots(figsize=(10, 10))
    for zone, color in zone_colors.items():
        zone_data = data[data['Permaculture_Zone'] == zone]
        ax.scatter(zone_data['X_Coordinate'], zone_data['Y_Coordinate'], label=zone, c=color)
    
    plt.title('Permaculture Zones')
    plt.xlabel('X Coordinate')
    plt.ylabel('Y Coordinate')
    plt.legend()
    plt.grid(True)
    plt.show()

def visualize_crop_distribution(data):
    fig, ax = plt.subplots(figsize=(10, 10))
    sns.scatterplot(
        data=data,
        x='X_Coordinate', y='Y_Coordinate',
        hue='Crop_Type', palette='tab10', ax=ax, s=100
    )
    plt.title('Diverse Crop Distribution')
    plt.xlabel('X Coordinate')
    plt.ylabel('Y Coordinate')
    plt.legend(title='Crop Type')
    plt.grid(True)
    plt.show()

def visualize_efficiency(data, efficiency_col, title):
    plt.figure(figsize=(10, 10))
    sns.scatterplot(
        data=data, x='X_Coordinate', y='Y_Coordinate',
        size=efficiency_col, hue=efficiency_col, palette='viridis', sizes=(20, 200)
    )
    plt.title(title)
    plt.xlabel('X Coordinate')
    plt.ylabel('Y Coordinate')
    plt.grid(True)
    plt.show()

def visualize_ecological_systems(data):
    fig, ax = plt.subplots(figsize=(10, 10))
    sns.scatterplot(
        data=data,
        x='X_Coordinate', y='Y_Coordinate',
        hue='Ecological_System', palette='Set2', ax=ax, s=100
    )
    plt.title('Ecological Systems Distribution')
    plt.xlabel('X Coordinate')
    plt.ylabel('Y Coordinate')
    plt.legend(title='Ecological System')
    plt.grid(True)
    plt.show()

# Visualizations
#visualize_permaculture_zones(grid_data)
visualize_crop_distribution(grid_data)
visualize_efficiency(grid_data, 'Water_Use_Efficiency', 'Water Use Efficiency')
visualize_efficiency(grid_data, 'Fertilizer_Use_Efficiency', 'Fertilizer Use Efficiency')
visualize_ecological_systems(grid_data)
visualize_efficiency(grid_data, 'Yield_Percentage', 'Yield Percentage Distribution')

