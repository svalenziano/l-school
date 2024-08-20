'Code A'
class Person:
    @property
    def name(self):
        return self.name

    @name.setter
    def name(self, name):
        self.name = name

kate = Person()
kate.name = 'Kate'
print(kate.name)
