class Vehicle:

    vehicle_counter = 0

    def __init__(self):
        Vehicle.vehicle_counter += 1

    @classmethod
    def vehicles(cls):
        return Vehicle.vehicle_counter

    def vehicles_self(self):
        return self.__class__.vehicles()

class Car(Vehicle):
    pass

class Truck(Vehicle):
    pass

class Boat(Vehicle):
    pass


print(f"{Car.vehicles()=}")     # 0
car1 = Car()
print(f"{Car.vehicles()=}")     # 1
car2 = Car()
car3 = Car()
car4 = Car()
print(f"{Car.vehicles()=}")     # 4
truck1 = Truck()
truck2 = Truck()
print(f"{Truck.vehicles()=}")   # 6
boat1 = Boat()
boat2 = Boat()
print(f"{Boat.vehicles()=}")    # 8

for i in [car1, car2, car3, car4, truck1, truck2, boat1, boat2]:
    print(f"{i.__class__.__name__} {i.vehicles_self()=}")
