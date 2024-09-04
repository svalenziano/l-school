'''
Create a function named describe_pet that takes one positional argument animal_type and one keyword argument name with a default value of an empty string. The function should print a description of the pet. The function should not accept more than 1 positional argument.
'''

def describe_pet(animal_type, *, name=''):
    print(f"{name} is an extremely radical {animal_type}!")

describe_pet('doggo', name='Rusty')
describe_pet('kitty', 'Svenya')
