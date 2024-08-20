class Mammal:
    counter = 0
    def __init__(self, name):
        self._name = name
        Mammal.counter += 1  

class Dog(Mammal):
    pass

luna = Dog('Luna')
print(vars(Dog)); print()  # {'__module__': '__main__', '__doc__': None}

steven = Mammal("Steven")
print(vars(Mammal)); print()  # {'__module__': '__main__', 'counter': 2, ...

doby = Dog('Doby')
print(vars(Dog)); print()  # {'__module__': '__main__', '__doc__': None}

print(hasattr(Dog, 'counter'))
print(Dog.counter)