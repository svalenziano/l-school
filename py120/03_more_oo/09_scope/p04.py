class Dog:
    def __init__(self, breed):
        self._breed = breed
    
    @property
    def breed(self):
        return self._breed
    
    def get_breed(self):
        return self._breed
    
luna = Dog('floofy and white')
print(luna.get_breed())

luna._breed = 'Mutant Megadog'
print(luna.get_breed())


