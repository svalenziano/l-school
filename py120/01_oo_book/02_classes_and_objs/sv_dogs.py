class Dog:
    instances = []
    instance_count = 0

    @classmethod
    def print_names(cls):
        for instance in cls.instances:
            print(' - ', instance._name)
    
    @classmethod
    def print_names_except(cls, object_to_omit):
        for instance in cls.instances:
            if not instance is object_to_omit:
                print(' - ', instance._name)

    @classmethod
    def print_summary(cls):
        print(f"There are {cls.instance_count} dogs:")
        cls.print_names()  # 👈👈👈

    def __init__(self, name):
        self._name = name
        Dog.instances.append(self)
        Dog.instance_count += 1

    def print_friends(self):
        print(f"Hello I'm {self._name}, and my competition for treats is:")
        self.__class__.print_names_except(self)

class Sheltie(Dog):
    instances = []


luna = Dog('Luna')
jerry = Dog("Jerry")
seinfeld = Dog("Seinfeld")

# Dog.print_summary()
luna.print_friends()
print(f"{Sheltie.__dict__=}")
print(f"{Dog.__dict__=}")
print(luna.__dict__)