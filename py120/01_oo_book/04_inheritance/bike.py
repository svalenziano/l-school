from paint import PaintJobMixin

class Bike(PaintJobMixin):

    def __init__(self, color):
        self.color = color

gertrude = Bike('green')
print(gertrude.color)
print(gertrude._color)