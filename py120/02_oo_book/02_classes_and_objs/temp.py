class GoodDog:

    def __init__(self, name, age):
        self.age = age  # set using setter
        self._name = name  # set using 'standard' method

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, age):
        print('setting age using @age.setter')
        self._age = age

sparky = GoodDog('Sparky', 5)
print(f"{sparky._name} is {sparky.age} years old")
print(vars(sparky))