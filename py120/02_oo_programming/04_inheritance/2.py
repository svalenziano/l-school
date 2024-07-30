class Pet:
    def speak(self):
        return self._sound

    def sleep(self):
        return 'sleeping!'

    def run(self):
        return 'running!'

    def jump(self):
        return 'jumping!'



class Dog(Pet):

    def __init__(self):
        self._sound = 'bark!'

    def fetch(self):
        return 'fetching!'
    

class Cat(Pet):
    
    def __init__(self):
        self._sound = 'meow!'
    
    pass


flippy = Cat()
print(flippy.speak())

luna = Dog()
print(luna.speak())


pet = Pet()
dave = Dog()
kitty = Cat()

print(pet.run())              # running!
print(kitty.run())            # running!
print(kitty.speak())          # meow!
try:
    kitty.fetch()
except Exception as exception:
    print(exception.__class__.__name__, exception, "\n")
    # AttributeError: 'Cat' object has no attribute 'fetch'

print(dave.speak())           # bark!

for i in [pet, dave, kitty]:
    print([cls.__name__ for cls in type(i).mro()])
    print(type(i).__name__)

