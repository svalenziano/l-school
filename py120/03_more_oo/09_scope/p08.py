class Car:

    manufacturer = 'Honda'

    def __init__(self, man):
        self.manufacturer = man

    def show_manufacturer(self):
        print(f"{self.manufacturer=}")
        print(f"{self.__class__.manufacturer=}")

marla = Car('Tesla')
marla.show_manufacturer()