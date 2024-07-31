class Dog:
    def __init__(self, name, age, breed):
        self.name = name
        self._age = age
        self.__breed = breed

    def __str__(self):
        return f'''
My name is {self.name}.
I am {self._age} years old.
I am a {self.__breed}.
'''

rover = Dog('Rover', 4, 'Mutt')
print(rover)                # My name is Rover.
                            # I am 4 years old.
                            # I am a Mutt.

rover.name = 'Fido'
rover._age = 7
rover.__breed = 'Poodle'
print(rover)                # My name is Fido.
                            # I am 7 years old.
                            # I am a Mutt.
print(rover.__breed)        # Poodle
print(rover._Dog__breed)    # Mutt

rover._Dog__breed = 'Boxer'
print(rover)                # My name is Fido.
                            # I am 7 years old.
                            # I am a Boxer.