class Animal:
    def __init__(self, color):
        self.color = color

class Cat(Animal):
    pass

class Bird(Animal):
    pass

cat1 = Cat('Black')
print(cat1.color)

print([cls.__name__ for cls in type(cat1).mro()])

'''
Alg
    v1
        While type() doesn't equal <class 'type'>
        
'''