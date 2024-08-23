class Person:
    name = 'Leslie'

    def get_name(self):
        return [
            Person.name,
            self.__class__.name,
            type(self).name,
            self.name,
            Teacher.name
        ]

class Teacher(Person):
    name = 'Ms Taylor'

teacher = Teacher()
print(teacher.get_name())
# ['Leslie', 'Ms Taylor', 'Ms Taylor', 'Ms Taylor']