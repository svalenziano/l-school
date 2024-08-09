class KrispyKreme:
    def __init__(self, filling, glazing):
        self.filling = filling if filling else 'Plain'
        self.glazing = glazing

    def __str__(self):
        string = self.filling
        if self.glazing:
            string += f" with {self.glazing}"
        return string

donut1 = KrispyKreme(None, None)
donut2 = KrispyKreme('Vanilla', None)
donut3 = KrispyKreme(None, 'sugar')
donut4 = KrispyKreme(None, 'chocolate sprinkles')
donut5 = KrispyKreme('Custard', 'icing')

print(donut1)       # Plain
print(donut2)       # Vanilla
print(donut3)       # Plain with sugar
print(donut4)       # Plain with chocolate sprinkles
print(donut5)       # Custard with icing