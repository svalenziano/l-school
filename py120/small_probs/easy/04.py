class Pet:
    def __init__(self, name, age, color):
        self._name = name
        self._age = age
        self._color = color

    @property
    def color(self):
        return self._color

    @property
    def name(self):
        return self._name

    @property
    def age(self):
        return self._age
    
    @property
    def pet_type(self):
        return self.__class__.__name__

    @property
    def info(self):
        description = (
            f"My {self.pet_type.casefold()} {self.name} is " +
            f"{self.age} years old and has {self.color} fur."
        )
        return description


class Cat(Pet):
    pass

cocoa = Cat('Cocoa', 3, 'black')
cheddar = Cat('Cheddar', 4, 'yellow and white')

print(cocoa.info)
print(cheddar.info)