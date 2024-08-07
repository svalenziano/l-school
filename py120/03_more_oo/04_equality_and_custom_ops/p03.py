'''
P
    Impelement methods for <, <=, >, >=
'''

class Cat:
    def __init__(self, name):
        self.name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        self._name = name

    @property
    def lname(self):
        return self.name.casefold()

    def __eq__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        return self.lname == other.lname
    
    def __ne__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        return self.lname != other.lname
    
    
    def __lt__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        return self.lname < other.lname
    
    def __le__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        return self.lname <= other.lname

    def __gt__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        return self.lname > other.lname
    
    def __ge__(self, other):
        if not isinstance(other, Cat):
            return NotImplemented
        return self.lname >= other.lname



luna = Cat('Luna')
jerry = Cat('Jerry')
luna2 = Cat('Luna')
a = Cat('Alphacat')
weird = Cat('12324896')

print(luna == 'Luna')
print(luna == luna2)

print('weird < a < jerry < luna')
print(weird < a < jerry < luna)

print()
print(luna <= luna); print(luna < luna)
print(luna >= luna); print(luna > luna)