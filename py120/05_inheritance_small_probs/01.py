'''
https://launchschool.com/exercises/a7060491
'''



class Vehicle:
    def __init__(self, year):
        self._year = year

    @property
    def year(self):
        return self._year

# Comments show expected output
truck1 = Truck(1994)
print(truck1.year)            # 1994

car1 = Car(2006)
print(car1.year)              # 2006