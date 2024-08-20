class Mammal:
    instance_count = 0
    def __init__(self, name):
        self._name = name
        self.__class__.instance_count += 1  

class Dog(Mammal):
    pass

luna = Dog('Luna')
print(vars(Dog))
steven = Mammal("Steven")
print(vars(Dog))
doby = Dog('Doby')
print(vars(Dog))