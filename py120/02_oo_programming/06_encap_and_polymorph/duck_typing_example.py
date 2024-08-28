class Duck:
    def quack(self, qty):
        quacks = ('quack ' * qty).strip()
        print(f"I'm a {self.__class__.__name__} and I go {quacks}.")

class Paperweight:
    def quack(self, qty):
        quacks = ('quack ' * qty).strip()
        print(f"I'm a {self.__class__.__name__} and I DO NOT go {quacks}.")

donald = Duck()
heavy = Paperweight()

donald.quack(3)
heavy.quack(5)