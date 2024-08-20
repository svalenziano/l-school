class Dog:
    def speak(self):
        print("Dog says bark!")

class HerdingDog(Dog):
    pass

class Sheltie(HerdingDog):
    def say_super(self):
        print(super().__class__.__name__)
        super().speak()


rusty = Sheltie()
rusty.say_super()