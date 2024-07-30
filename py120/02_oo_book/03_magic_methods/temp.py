class Vehicle:
    pass

class Car(Vehicle):
    pass

class Truck(Vehicle):
    pass

car = Car()
print(isinstance(car, Car))       # True
#print(isinstance(car, Vehicle))   # True
#print(isinstance(car, Truck))     # False
#
#truck = Truck()
#print(isinstance(truck, Vehicle)) # True
#print(isinstance(truck, Car))     # False