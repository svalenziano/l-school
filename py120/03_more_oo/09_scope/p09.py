class Bird:
    species = 'sparrow'

class Sparrow(Bird):
    pass

cute = Sparrow()
print(cute.__class__.species)