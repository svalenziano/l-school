class Transform:
    def __init__(self, string):
        self._string = string
    
    def uppercase(self):
        return self._string.upper()
    
    def lowercase(self):
        try:
            return self._string.casefold()
        except:
            if isinstance(self, str):
                return self.casefold()
            return None


my_data = Transform('abc')
print(my_data.uppercase())              # ABC
print(Transform.lowercase('XYZ'))       # xyz

# SV test
print(Transform.lowercase(1234))       # xyz