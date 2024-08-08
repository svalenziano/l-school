class Bird:
    def __init__(self, species):
        self.species = species

class Sparrow(Bird):
    def __init__(self, species, color):
        self.color = color
        self.species = species

birdie = Sparrow("sparrow", "brown")
print(birdie.species)               # What will this output?