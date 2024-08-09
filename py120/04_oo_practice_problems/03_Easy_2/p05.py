class Greeting:
    
    def greet(self, message):
        print(message)

class Hello(Greeting):
    
    @classmethod
    def hi(cls):
        g = Greeting()
        g.greet('Hello')

class Goodbye(Greeting):
    def bye(self):
        self.greet('Goodbye')

h = Hello()
h.hi()