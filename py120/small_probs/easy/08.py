# MY CODE (ONLY ALLOWED ONE ADDITIONAL METHOD)
class Animal:
    def __init__(self, name):
        self.name = name
    
    def walk(self):
        return f"{self.name} {self.gait()} forward"


# LS CODE
class Person(Animal):
    def gait(self):
        return "strolls"

class Cat(Animal):
    def gait(self):
        return "saunters"

class Cheetah(Animal):
    def gait(self):
        return "runs"
    




# LS TESTS
mike = Person("Mike")
print(mike.walk())  # Expected: "Mike strolls forward"

kitty = Cat("Kitty")
print(kitty.walk())  # Expected: "Kitty saunters forward"

flash = Cheetah("Flash")
print(flash.walk())  # Expected: "Flash runs forward"