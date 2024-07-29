from math import isclose

class Car:

    def __init__(self, model, model_year, color):
        self._model = model
        self._year = model_year
        self.color = color
        self._speed = 0
        print(f"Hello human, I'm a {self.color} {self.year} " +
              f"{self._model}, at your service!")

    @staticmethod
    def efficiency(km_travelled, liters_burned):
        eff = round(km_travelled / liters_burned, 2)
        if isclose(eff % 1, 0):
            eff = int(eff)
        print(f"Efficiency = {eff} km/liter")

    @property
    def year(self):
        return self._year

    @year.setter
    def year(self, integer):
        self._year = integer
        print(f"Updated model year to {self._year}.")

    def on(self):
        print(f"Put put, this {self.color} {self.year} {self._model} is ready to roll.")

    def acel(self):
        self._speed += 10
        print(f"Accelerated to {self._speed} kph.")

    def brake(self):
        self._speed -= 10
        print(f"Braked to {self._speed} kph.")

    def off(self):
        while self._speed > 0:
            self.brake()
        print(f"Turning off. This {self._model} is gonna rest now. " + 
              "It's been a pleasure!")
    
    def get_speed(self):
        print(f"How fast you ask?  {self._speed} kph.")

    def print_color(self):
        print(f"My color is still {self.color}, glad you asked!")

    def set_cruise(self, cruise_speed):
        print(f"Cruise control set to {cruise_speed}.")
        self._speed = cruise_speed
    
    @property
    def color(self):
        return self._color

    @color.setter
    def color(self, color:str):
        self._color = color
        #print(f"Sweet paintjob!  Color = {self.color}")


m = Car('Mazda 3', '2015', 'silverish')  # Marla
g = Car('LHT', '2008', 'green')  # Gertrude
#g.color = 'Purple'
#m.color = 'Gray'
#m.year = 1999
#g.year = 2022
#Car.efficiency(93,2)
#m.efficiency(25,1)
m.set_cruise(99)
g.set_cruise(20)


while True:
    msg = input(">>> ")
    try:
        eval(msg)
    except:
        print('Invalid')
