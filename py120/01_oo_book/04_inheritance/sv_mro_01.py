class Mammal:
    instance_count = 0
    instances = []
    def __init__(self, name):
        self._name = name
        Mammal.instances.append(self)
        Mammal.instance_count += 1  

    @property
    def identify(self):
        return f"{self._name}, {self.__class__.__name__}"

class Dog(Mammal):
    pass


luna = Dog('Luna')
steven = Mammal("Steven")
mel = Mammal('Mel')

for instance in Mammal.instances:
    print(instance.identify)
    print(f"{instance.__dict__=}")
    print()

for cls in [Mammal, Dog]:
    print(f"{cls.__name__} {cls.instance_count=}")