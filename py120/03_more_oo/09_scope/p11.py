class Mammal:

    def __init__(self):
        self.legs = 4

class Human(Mammal):

    def __init__(self):
        self.legs = 2

fido = Mammal()
roger = Human()

for i in [fido, roger]:
    print(i.legs)