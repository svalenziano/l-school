class Person:
    def __init__(self, name=''):
        self.name = name

    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, name):
        if not isinstance(name, str):
            return NotImplemented
        self._name = name

dude = Person()
dude.name = 'Lebowski'
print(dude.name)

walter = Person('Walter Sobchak')
print(walter.name)

maude = Person('Maude')
print(maude.name)
maude.name = 'Maude Lebowski'
print(maude._name)
maude.name = ['MAUDE']  # Note that no error is raised by Python
print(maude.name)


