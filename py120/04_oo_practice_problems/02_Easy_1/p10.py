class Cat:
    _cats_count = 0

    def __init__(self, type):
        self.type = type
        self.__class__._cats_count += 1

    @classmethod
    def cats_count(cls):
        return cls._cats_count  # returns value of class variable
    
milo = Cat('cute')
print(Cat.cats_count())
brindle = Cat('ferocious')
print(Cat.cats_count())
phillip = Cat('both')
print(Cat.cats_count())