class TurnSignalMixin:
    
    def signal_left(self):
        print('Singalling left')

    def signal_right(self):
        print('Singalling right')

    def signal_off(self):
        print('Singnal is now off')

class Vehicle():

    vehicle_counter = 0

    def __init__(self):
        Vehicle.vehicle_counter += 1

    @classmethod
    def vehicles(cls):
        return Vehicle.vehicle_counter


class Car(TurnSignalMixin, Vehicle):
    pass

class Truck(TurnSignalMixin, Vehicle):
    pass

class Boat(Vehicle):
    pass

print(Vehicle.mro())
print(Car.mro())
print(Truck.mro())
print(Boat.mro())


lil_boat = Boat()
# print(lil_boat.mro())  # instances don't have mro method

print(range.mro())
print(list.mro())