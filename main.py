import requests
import csv
import geopy.distance


Nahiyan_lat, Islam_lon = 31.940326695804846, -32.12661770330882

def get_elevation(lat, lon, api_key):

    elevation_api_url = f"https://maps.googleapis.com/maps/api/elevation/json?locations={lat},{lon}&key={api_key}"
    
    response = requests.get(elevation_api_url)
    
    if response.status_code == 200:

        elevation_data = response.json()
        
        if elevation_data["results"]:
      
            return elevation_data["results"][0]["elevation"]
        else:
            return "Elevation does not exist."
    else:
        return f"Error: {response.status_code}"

api_key = 'AIzaSyBENXz_ZQgx6RoKGbp4tgrp_Co9rNMd5RU'

elevation = get_elevation(Nahiyan_lat, Islam_lon, api_key)

print(f"The elevation at latitude {Nahiyan_lat} and longitude {Islam_lon} is {elevation} meters.")


with open(r'datasets/US_orphaned_wells.csv', mode='r', encoding='utf-8') as file:
    csvreader = csv.reader(file)
    next(csvreader)  # Skip the header row

    longitudevalues = []
    latitudevalues = []
    for row in csvreader:
        try:
            longitude = float(row[8])
            latitude = float(row[7])
            longitudevalues.append(longitude)
            latitudevalues.append(latitude)
        except ValueError:
            continue

def haversine(lat1, lon1, lat2, lon2):
    coords_1 = (lat1,lon1)
    coords_2 = (lat2,lon2)
    return (geopy.distance.geodesic(coords_1, coords_2).meters)
def nearestwellsite(lat,lon):
    distance1 = haversine(latitudevalues[0],longitudevalues[0],lat,lon)
    index = 0
    for i in range(len(longitudevalues)):
        current_distance = haversine(latitudevalues[i], longitudevalues[i], lat, lon)
        if current_distance < distance1:
            distance1 = haversine(latitudevalues[i],longitudevalues[i],lat,lon)
            index = i
    distance2 = distance1 / 1609.34
    print(f"Closest Oil well is located at latitude: {latitudevalues[index]} longitude: {longitudevalues[index]} and the distance is {distance2:.2f} meters")
    return distance2

nearestwellsite(Nahiyan_lat, Islam_lon)

def output_function(distance2, elevation, factor_infrastructure_weight = 0.2, factor_food_weight = 0.3):
    elevation_value = 1 / (1 + abs(distance2)) 
    distance2_value = 1 / abs(elevation)

    FEIND_output = (distance2_value * 0.25) + 0.2 + factor_food_weight + factor_infrastructure_weight + (elevation_value * 1)
    print(FEIND_output)

output_function(nearestwellsite(Nahiyan_lat, Islam_lon), elevation, factor_infrastructure_weight = 0.2, factor_food_weight = 0.3)

    