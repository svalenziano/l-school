class Student:
    school_name = 'Oxford'
    
    def __init__(self, name):
        self.name = name

bart = Student('Bart')
lisa = Student('Lisa')

for student in [lisa, bart]:
    print(student.name)
    print(student.__class__.school_name)