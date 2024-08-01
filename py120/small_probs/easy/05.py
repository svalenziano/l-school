class Animal:
    def __init__(self, name, age, legs, species, status):
        self.name = name
        self.age = age
        self.legs = legs
        self.species = species
        self.status = status

    def introduce(self):
        return (f"Hello, my name is {self.name} and I am "
                f"{self.age} years old and {self.status}.")
    
class Cat(Animal):
    def __init__(self, name, age, status):
        LEGS = 4
        super().__init__(name, age, LEGS, 'cat', status)

    def introduce(self):
        return super().introduce() + ' Meow meow!'
    
class Dog(Animal):

    SOUND = 'Woof! Woof!'

    def __init__(self, name, age, status, owner):
        LEGS = 4
        self.owner = owner
        super().__init__(name, age, LEGS, 'dog', status)

    def greet_owner(self):
        return f"Hi {self.owner}! {self.__class__.SOUND}"
    
    def introduce(self):
        return super().introduce() + ' ' + self.SOUND


cat = Cat("Pepe", 4, "happy")
expected = ("Hello, my name is Pepe and I am 4 years old "
            "and happy. Meow meow!")
print(cat.introduce() == expected)      # True


dog = Dog("Bobo", 9, "hungry", "Daddy")
expected = ("Hello, my name is Bobo and I am 9 years old "
            "and hungry. Woof! Woof!")
print(dog.introduce() == expected)                  # True
print(dog.greet_owner() == "Hi Daddy! Woof! Woof!") # True