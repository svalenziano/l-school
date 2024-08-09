class Animal:

    def speak(self, string):
        print(string)

class Cat(Animal):

    def meow(self):
        super().speak('Meow!')

class Dog(Animal):

    def bark(self):
        super().speak(('Woof! ' * 3).strip())

claro = Cat()
barkley = Dog()

claro.meow()
barkley.bark()
