class Cat:
    def __init__(self, name):
        self.name = name

    def __eq__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        return self.name.casefold() == other.name.casefold()
    
    def __ne__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        return self.name.casefold() != other.name.casefold()
    

luna = Cat('Luna')
jerry = Cat('Jerry')
luna2 = Cat('Luna')

print(luna == jerry)
print(luna != jerry)
print()
print(luna == luna2)
print(luna != luna2)