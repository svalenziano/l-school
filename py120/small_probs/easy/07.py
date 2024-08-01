class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model
        self.wheels = 0

    def get_wheels(self):
        self.wheels

    def info(self):
        return f"{self.make} {self.model}"

class Car(Vehicle):
    def __init__(self, make, model):
        super().__init__(make, model)
        self.wheels = 4



class Motorcycle(Vehicle):
    def __init__(self, make, model):
        super().__init__(make, model)
        self.wheels = 2


class Truck(Vehicle):
    def __init__(self, make, model, payload):
        super().__init__(make, model)
        self.payload = payload
        self.wheels = 6
