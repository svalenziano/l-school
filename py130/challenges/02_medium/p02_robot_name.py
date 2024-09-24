'''
Write a program that manages robot factory settings.

When robots come off the factory floor, they have no name. The first time you boot them up, a random name is generated, such as RX837 or BC811.

Every once in a while, we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it will respond with a new random name.

The names must be random; they should not follow a predictable sequence. Random names means there is a risk of collisions. Your solution should not allow using the same name twice.
'''
import random

class Robot:
    
    _instances = []
    LETTERS = [chr(i) for i in range(ord('A'), ord('Z') + 1)]

    
    def __init__(self):
        '''
        ALGO
        - assign name to ''
        - Create random name
            - Use reset to create a new name 
            - check to see if any of the existing robots have the same name
            - if yes
                - reset the name
        - Add robot to list of robots
        '''
        self._name = ''
        self.reset()
        Robot._instances.append(self)

    @property
    def name(self):
        return self._name


    def reset(self):
        '''
        REQS:
        - cannot be identical to any existing robots, or to the current name
        ALGO:
        - Create a list of existing names, including self._name (robot's current name)
        - Generate a random name
            - While the random name is in the list of existing names:
                - Generate a new name
        '''
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
    
if __name__ == "__main__":
    for i in range(10):
        Robot()
    for robot in Robot._instances:
        print(robot.name)
        robot.reset()
        print(robot.name)
        print()
