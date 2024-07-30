class Flight:
    def fly(self):
        pass

class Aquatic:
    def swim(self):
        pass

class Migratory:
    def migrate(self):
        pass

class Animal:
    pass

class Bird(Animal):
    pass

class Penguin(Migratory, Aquatic, Bird):
    pass

pingu = Penguin()
pingu.fly()