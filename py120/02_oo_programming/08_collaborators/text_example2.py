class Bike:
    def name(self):
        return 'Abc123'


class Foo:
    def __init__(self, obj):
        self.obj = obj

    def bar(self, qux):
        return self.obj.name() + qux.name()
    
t = Foo(Bike)
t.bar(Bike)