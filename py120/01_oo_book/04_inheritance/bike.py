from paint import PaintJobMixin

class Bike(PaintJobMixin):

    def __init__(self, color):
        self.set_color(color)

gertrude = Bike('green')
print(gertrude.get_color())