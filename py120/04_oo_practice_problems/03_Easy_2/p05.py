class Greeting:
    def greet(self, message):
        print(message)

class Hello(Greeting):
    @classmethod
    def hi(cls):
        cls.greet('Hello')

class Goodbye(Greeting):
    def bye(self):
        self.greet('Goodbye')

Hello.hi()