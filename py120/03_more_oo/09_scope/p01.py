class Dog:
    def __init__(self, breed):
        self._breed = breed
    
    @property
    def breed(self):
        return self._breed
    
luna = Dog('floofy and white')
rusty = Dog('Shetland Sheepdog')

print(luna.breed)
print(rusty.breed)