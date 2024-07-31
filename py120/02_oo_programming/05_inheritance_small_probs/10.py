class FlyingMixin:
    pass

class Animal:
    def __init__(self) -> None:
        print('Cool cool')

class Bird(FlyingMixin, Animal):
    pass

bird1 = Bird()
print([c.__name__ for c in Bird.mro()])

class Bird(Animal, FlyingMixin):
    pass

bird1 = Bird()
print([c.__name__ for c in Bird.mro()])