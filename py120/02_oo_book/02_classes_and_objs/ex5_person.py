class Person:

    def __init__(self, fname, lname):
        self.fname = fname
        self.lname = lname

    @staticmethod
    def validate(name):
        if not name.isalpha():
            raise ValueError('Name must be alphabetic')
        return name


    @property
    def fname(self):
        return self._fname

    @fname.setter
    def fname(self, name:str):
        self._fname = Person.validate(name.capitalize())


    @property
    def lname(self):
        return self._lname

    @lname.setter
    def lname(self, name:str):
        self._lname = Person.validate(name.capitalize())

    @property
    def name(self):
        return f"{self.fname} {self.lname}"

    @name.setter
    def name(self, name):
        self.fname, self.lname = name


friend = Person('Lynn', 'Blake')
print(friend.name)             # Lynn Blake

friend.name = ('beep', 'boop')
print(friend.name)

friend.name = ('Lynn', 'Blake-John')
# ValueError: Name must be alphabetic.
print(friend.name)