class Vehicle:
    WHEELS = 4

    @classmethod
    def wheels(cls):
        return cls.WHEELS

class Motorcycle(Vehicle):
    @classmethod
    def vehicle_wheels(cls):
        return cls.WHEELS

print((Motorcycle.mro()))

print(Motorcycle.wheels())              # 4
print(Motorcycle.WHEELS)                # 4
print(Vehicle.wheels())                 # 4
print(Vehicle.WHEELS)                   # 4
print(Motorcycle.vehicle_wheels())      # 4