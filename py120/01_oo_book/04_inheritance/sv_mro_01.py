class Mammal:
    instance_count = 0
    def __init__(self, name):
        self._name = name
        self.__class__.instance_count += 1  

class Dog(Mammal):
    pass

luna = Dog('Luna')
steven = Mammal("Steven")
mel = Mammal('Mel')

print(f"{Mammal.instance_count=}")
print(f"{Dog.instance_count=}")