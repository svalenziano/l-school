from flying_mixin import FlyingMixin

class Animal:
    pass

class Bird(FlyingMixin, Animal):
    pass

bird1 = Bird()
print([c.__name__ for c in Bird.mro()])

class Bird(Animal, FlyingMixin):
    pass

bird1 = Bird()
print([c.__name__ for c in Bird.mro()])