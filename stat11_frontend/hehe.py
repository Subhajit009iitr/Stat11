import requests
import json

# URL of the API endpoint
url = "http://localhost:8000/api/batter_scoreboard/"

# Make a GET request to the API and store the response
response = requests.get(url)

# Check if the request was successful (HTTP status code 200)
if response.status_code == 200:
    # Write the JSON response to a local file
    json_data = json.dumps(response.json())

    with open("heh.txt", "w") as f:
        f.write(json_data)
    print("JSON data written to heh.json")
    print(json_data)
    
else:
    print(f"Failed to get data from API. Status code: {response.status_code}")
