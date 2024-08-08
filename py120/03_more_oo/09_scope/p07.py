class Student:
    school_name = 'Oxford'
    
    def __init__(self, name):
        self.name = name

    @classmethod
    def get_school_name(cls):
        return cls.school_name

print(Student.get_school_name())
print(Student.school_name)