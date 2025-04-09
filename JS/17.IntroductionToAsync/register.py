name = input("What is your name: ")
surname = input("What is your surname: ")

users = []

def register(name, surname):
    user = {
        "name": name,
        "surname": surname
    }
    users.append(user)
    # print(users)
    
register(name, surname)


import json

# add user to json file

def add_user_to_json():
    with open("users.json", "w") as file:
        json.dump(users, file)
        
add_user_to_json()