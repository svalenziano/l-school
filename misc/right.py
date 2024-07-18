my_pets = {
    "dogs": [
        {"name": "phanouris", "breed": "english setter"},
        {"name": "luna", "breed": "mongrel"},
    ],
    "birds": [
        {"name": "lot", "breed": "yellow-faced parrot"}
    ],
    "fish": [
        {"name": "goldin", "breed": "goldfish"}
    ],
    "cats": [
        {"name": "louie", "breed": "british shorthair"},
        {"name": "zuzu", "breed": "moggie"}
    ]
}

expected_pets_list == [
    {
        "type": "dogs",
        "pets": [
            {"name": "phanouris", "breed": "english setter"},
            {"name": "luna", "breed": "mongrel"},
        ],
    },
    {"type": "birds", "pets": [{"name": "lot", "breed": "yellow-faced parrot"}]},
    {"type": "fish", "pets": [{"name": "goldin", "breed": "goldfish"}]},
    {
        "type": "cats",
        "pets": [
            {"name": "louie", "breed": "british shorthair"},
            {"name": "zuzu", "breed": "moggie"},
        ],
    },
]

from copy import deepcopy

pets_list = deepcopy(my_pets)

#print(pets_list == expected_pets_list)

print(my_pets == pets_list)                              # True
print(my_pets['dogs'] is not pets_list[0]['pets'])       # True
print(my_pets['dogs'][0] is not pets_list[0]['pets'][0]) # True