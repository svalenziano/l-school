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
My answer
self.__class__.__name__ returns the name of the calling class, in this case, 'Car'
'''