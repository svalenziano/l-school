class Map:
    def __init__(self):
        self._markers = []
    
    def add_marker(self, name, x, y):
        marker = Marker(name, x, y)
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
    def __init__(self, name, x, y):
        self._name = name
        self._x = x
        self._y = y

    def __str__(self):
        return f"{self._name} at ({self._x}, {self._y})"

map_a = Map()
map_a.add_marker('Kwik-E-Mart', 2, 5)
map_a.add_marker('Beaver Marsh Preserve', 5, 1)
map_a.add_marker('Springfield Town Hall', 8, 12)

print(map_a)

print(); map_a.pop_marker()

print(map_a)