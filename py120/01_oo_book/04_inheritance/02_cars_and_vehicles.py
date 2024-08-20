class Vehicle:
    number_of_vehicles = 0

    def __init__(self):
        Vehicle.number_of_vehicles += 1
        v = Vehicle.number_of_vehicles
        s = self.__class__.number_of_vehicles
        print(f"👉Vehicle= {v}. 👉self: old = {s}, new = {s + 1}")
        self.__class__.number_of_vehicles += 1

    @classmethod
    def vehicles(cls):
        return Vehicle.number_of_vehicles
    
    def vehicles_self(self):
        return self.__class__.number_of_vehicles

class Car(Vehicle):

    def __init__(self):
        super().__init__()

class Truck(Vehicle):

    def __init__(self):
        super().__init__()

class Boat(Vehicle):

    def __init__(self):
        super().__init__()

print(Car.vehicles())     # 0
car1 = Car()
print(Car.vehicles())     # 1
car2 = Car()
car3 = Car()
car4 = Car()
print(Car.vehicles())     # 4
truck1 = Truck()
truck2 = Truck()
print(Truck.vehicles())   # 6
boat1 = Boat()
boat2 = Boat()
print(Boat.vehicles())    # 8

for i in [car1, car2, car3, car4, truck1, truck2, boat1, boat2]:
    print(f"{i.__class__.__name__} {i.vehicles_self()=}")