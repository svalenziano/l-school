'''
Write a program that manages robot factory settings.

When robots come off the factory floor, they have no name. The first time you boot them up, a random name is generated, such as RX837 or BC811.

Every once in a while, we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it will respond with a new random name.

The names must be random; they should not follow a predictable sequence. Random names means there is a risk of collisions. Your solution should not allow using the same name twice.
'''

class Robot:
    
    robots = []
    
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
        pass

    @property
    def name(self):
        '''
        ALGO
        - simply return the name instance var
        '''
        pass


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
            pass
        
        pass