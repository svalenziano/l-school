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


class Car(Vehicle, TurnSignalMixin):
    pass

class Truck(Vehicle, TurnSignalMixin):
    pass

class Boat(Vehicle):
    pass

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

car1.signal_left()       # Signalling left
truck1.signal_right()    # Signalling right
car1.signal_off()        # Signal is now off
truck1.signal_off()      # Signal is now off
boat1.signal_left()
# AttributeError: 'Boat' object has no attribute
# 'signal_left'