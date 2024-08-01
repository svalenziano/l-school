# MY CODE (ONLY ALLOWED ONE ADDITIONAL METHOD)
class WalkMixin:
    def walk(self):
        return f"{self.name} {self.gait()} forward"


# LS CODE
class Person(WalkMixin):
    def __init__(self, name):
        self.name = name

    def gait(self):
        return "strolls"
    
class Noble:
    def __init__(self, name, title):
        self.name = name
        self.title = title

    def walk(self):
        return f"{self.title} {self.name} {self.gait()} forward"

    def gait(self):
        return "struts"

class Cat(WalkMixin):
    def __init__(self, name):
        self.name = name

    def gait(self):
        return "saunters"

class Cheetah(WalkMixin):
    def __init__(self, name):
        self.name = name

    def gait(self):
        return "runs"
    




# LS TESTS
mike = Person("Mike")
print(mike.walk())  # Expected: "Mike strolls forward"

kitty = Cat("Kitty")
print(kitty.walk())  # Expected: "Kitty saunters forward"

flash = Cheetah("Flash")
print(flash.walk())  # Expected: "Flash runs forward"


byron = Noble("Byron", "Lord")
print(byron.walk())  # "Lord Byron struts forward"
print(byron.name)    # "Byron"
print(byron.title)   # "Lord"