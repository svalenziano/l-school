class SpeedMixin:
    def go_fast(self):
        print(f'I am a super fast {self.__class__.__name__}!')

class Car(SpeedMixin):
    def go_slow(self):
        print('I am safe and driving slow.')

small_car = Car()
print(small_car.go_fast())
# I am a super fast Car!


'''


We use self.__class__.__name__ in the method. It works like so:

    self refers to the object referenced by small_car. In this case, that's a Car object.
    self.__class__ returns a reference to the Car class, which is an object of type class.
    Finally, self.__class__.__name__ returns the name of the Car class as a string: 'Car'.


'''