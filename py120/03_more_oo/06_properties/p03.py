class Rectangle:
    def __init__(self, width, length):
        self._width = width
        self._length = length
    
    @property
    def width(self):
        return self._width
    
    @property
    def length(self):
        return self._length
    
big = Rectangle(666, 777)
print(big.width)
print(big.length)
big.width = 42