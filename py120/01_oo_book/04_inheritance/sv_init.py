class Bike:
    def __init__(self, color, size):
        self.color = color
        self.size = size
        self.wheels = 2

class RoadBike(Bike):
    def __init__(self, color, size):
        self.gears = 20
        self.material = 'carbon fiber'
        super().__init__(color, size)

class BMXBike(Bike):
    def __init__(self, color, size, pegs):
        self.pegs = pegs
        self.material = 'Cro-moly steel'
        super().__init__(color, size)

oooh_fancy = RoadBike('Raw carbon', 'Large')
lil_tan = BMXBike('Tan', 'Large', 2)

print(f"{vars(lil_tan)=}")
print(f"{vars(oooh_fancy)=}")