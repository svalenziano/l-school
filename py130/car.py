class Car:
    def __init__(self):
        self._wheels = 4
        self._name = None

    @property
    def wheels(self):
        return self._wheels

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        if not isinstance(value, str):
            raise ValueError("Name must be a string")
        self._name = value