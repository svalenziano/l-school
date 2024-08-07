class Person:
    def __init__(self, name=''):
        self.name = name

    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, name):
        if not isinstance(name, str):
            raise ValueError('Name must be a string')
        if not name:
            raise ValueError('String must be non-empty')
        self._name = name

dude = Person('big')
dude.name = 'Lebowski'
print(dude.name)

walter = Person('Walter Sobchak')
print(walter.name)

maude = Person('Maude')
print(maude.name)
maude.name = 'Maude Lebowski'
print(maude._name)
maude.name = ['MAUDE']
print(maude.name)


