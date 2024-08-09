'''
SV PLANNING

Gas powered vehicle Mixin
    - kilo per liter
    - liters of fuel cap
    - range




'''
class GasPoweredMixin:
    def init_fuel_attributes(self,
                        kilometers_per_liter,
                        liters_of_fuel_capacity):
        self.fuel_efficiency = kilometers_per_liter
        self.fuel_capacity = liters_of_fuel_capacity

    def range(self):
        return self.fuel_capacity * self.fuel_efficiency

class WheeledVehicle(GasPoweredMixin):
    def __init__(self,
                 tire_list,
                 kilometers_per_liter,
                 liters_of_fuel_capacity):
        self.tires = tire_list
        self.init_fuel_attributes(kilometers_per_liter, liters_of_fuel_capacity)

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

class Catamaran(GasPoweredMixin):
  def __init__(self,
               number_propellers,
               number_hulls,
               kilometers_per_liter,
               liters_of_fuel_capacity):
    self.num_propellers = number_propellers
    self.num_hulls = number_hulls
    self.init_fuel_attributes(kilometers_per_liter, liters_of_fuel_capacity)
  
marla = Auto()
print(marla.range())

queen_mary = Catamaran(number_propellers=2,
                       number_hulls=2,
                       kilometers_per_liter=2,
                       liters_of_fuel_capacity=200)
print(queen_mary.range())
