class Student:
    school_name = ''
    def __init__(self):
        self.__class__.school_name = 'Oxford'

bart = Student()
print(bart.__class__.school_name)