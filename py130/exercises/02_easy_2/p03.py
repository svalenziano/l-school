'''
Write a function build_profile that takes a first name and a last name, and any number of keyword arguments to add to a user's profile.
'''

def build_profile(fname, lname, **kwargs):
    profile = {
        'first_name': fname,
        'last_name': lname,
    }
    for key, value in kwargs.items():
        profile[key] = value

    return profile





print(build_profile("Max", "Hawkins", location="San Francisco", field="Software Engineering"))
# {{'first_name': 'Max', 'last_name': 'Hawkins', 'location': 'San Francisco', 'field': 'Software Engineering'}}