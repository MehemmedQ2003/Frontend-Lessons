# Generate JSON file
import json

all_data = []
while True:
    name = input("Enter your name: ")
    age = int(input("Enter your age: "))
    city = input("Enter your city: ")
    
    data = {
        "name": name,
        "age": age,
        "city": city
    }
    
    all_data.append(data)
    with open("data.json", "w") as file:
        json.dump(all_data, file, indent=2)