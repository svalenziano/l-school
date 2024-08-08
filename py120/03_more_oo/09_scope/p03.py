class Cat:
    
    def get_name(self):
        try:
            return self.name
        except:
            return "Name not set!"
    
flippy = Cat()
print(flippy.get_name())
flippy.name = 'Phillip'
print(flippy.get_name())