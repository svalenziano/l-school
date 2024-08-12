class FueledVehicleMixin:
    def range(self):
        return self.fuel_capacity * self.fuel_efficiency

    def set_fuel_efficiency(self, kilometers_per_liter):
        self.fuel_efficiency = kilometers_per_liter

    def set_fuel_capacity(self, liters):
        self.fuel_capacity = liters

class Watercraft(FueledVehicleMixin):
    def __init__(self,
                 number_propellers,
                 number_hulls,
                 fuel_efficiency,
                 fuel_capacity):
        self.propellers = number_propellers
        self.hulls = number_hulls
        self.set_fuel_efficiency(fuel_efficiency)
        self.set_fuel_capacity(fuel_capacity)

    def range(self):
        return (self.fuel_capacity * self.fuel_efficiency) + 10


class Motorboat(Watercraft):
    def __init__(self,
                 kilometers_per_liter,
                 liters_of_fuel_capacity):
        # set up 1 hull and 1 propeller
        super().__init__(1,
                         1,
                         kilometers_per_liter,
                         liters_of_fuel_capacity)
        
class Catamaran(Watercraft):

    def __init__(self,
                 number_propellers,
                 number_hulls,
                 kilometers_per_liter,
                 liters_of_fuel_capacity):
        super().__init__(number_propellers,
                         number_hulls,
                         kilometers_per_liter,
                         liters_of_fuel_capacity)
        
class WheeledVehicle(FueledVehicleMixin):
    def __init__(self,
                 tire_list,
                 kilometers_per_liter,
                 liters_of_fuel_capacity):
        self.tires = tire_list
        self.set_fuel_efficiency(kilometers_per_liter)
        self.set_fuel_capacity(liters_of_fuel_capacity)

    def tire_pressure(self, tire_index):
        self.tires[tire_index]

    def inflate_tire(self, tire_index, pressure):
        self.tires[tire_index] = pressure

    

class Auto(WheeledVehicle):
    def __init__(self):
        # 4 tires with various tire pressures
        super().__init__([30, 30, 32, 32], 50, 25.0)

class Motorcycle(WheeledVehicle):
    def __init__(self):
        # 2 tires with various tire pressures
        super().__init__([20, 20], 80, 8.0)
        
marla = Auto()
print(marla.range())

hell_on_wheelz = Motorcycle()
print(hell_on_wheelz.range())

queen_mary = Catamaran(number_propellers=2,
                       number_hulls=2,
                       kilometers_per_liter=1.5,
                       liters_of_fuel_capacity=600)
print(queen_mary.range())