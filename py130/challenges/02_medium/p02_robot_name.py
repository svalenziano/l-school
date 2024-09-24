import random

class Robot:
    
    _instances = []
    LETTERS = [chr(i) for i in range(ord('A'), ord('Z') + 1)]

    def __init__(self):
        self._name = ''
        self.reset()
        Robot._instances.append(self)

    @property
    def name(self):
        return self._name

    def reset(self):
        def generate_name():
            def alpha():
                return random.choice(Robot.LETTERS)
            
            def digit():
                return random.randint(0, 9)

            name = f"{alpha()}{alpha()}{digit()}{digit()}{digit()}"
            return name
        
        existing_names = [robot.name for robot in Robot._instances]
        existing_names += self._name

        new_name = generate_name()
        while new_name in existing_names:
            new_name = generate_name()
        self._name = new_name    

