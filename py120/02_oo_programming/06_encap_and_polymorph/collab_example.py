class Map:
    def __init__(self):
        self._markers = []
    
    def add_marker(self, x, y):
        marker = Marker(x, y)
        self._markers.append(marker)
    
    def pop_marker(self):
        removed = self._markers.pop()
        print(f"Removed {str(removed)}")

    def __str__(self):
        map = '\nCheck out this map!'
        for marker in self._markers:
            map += '\n'
            map += str(marker)
        return map

class Marker:
    def __init__(self, x, y):
        self._x = x
        self._y = y

    # def remove(self):
    #     self._x = None
    #     self._y = None

    def __str__(self):
        return f"marker at ({self._x}, {self._y})"

map_a = Map()
map_a.add_marker(2, 5)
map_a.add_marker(5,1)
map_a.add_marker(8, 12)
print(map_a)
map_a.pop_marker()
print(map_a)

while True:
    command = input("Enter your command here: ")
    try:
        eval(command)
    except (AttributeError, TypeError, NameError, SyntaxError) as e:
        print(f"ERROR, please try again ({e})")