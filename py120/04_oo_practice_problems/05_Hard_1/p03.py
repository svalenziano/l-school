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
        
