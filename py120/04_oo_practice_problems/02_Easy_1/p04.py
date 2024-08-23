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
When we called small_car.go_fast, you may have noticed that the output 
includes the vehicle type. How is this done?

On line 10, when we call `go_fast()`, Python looks for a `go_fast` method within 
the Car class but does not find one.

Therefore, it looks in the mixin class, and finds the method on line 2.  When
this method is invoked, the value of `self` is the calling object, which is `small_car`.

Therefore, the value of `self.__class__.__name__` on line 3 will be the class name of 
`small_car`, which is `Car`
'''