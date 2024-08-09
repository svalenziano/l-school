import random

class Oracle:
    def predict_the_future(self):
        return f'You will {random.choice(self.choices())}.'  # missing closing parentheses in LS code

    def choices(self):
        return [
            'eat a nice lunch',
            'take a nap soon',
            'stay at work late',
            'adopt a cat',
        ]

oracle = Oracle()
print(oracle.predict_the_future())

'''
When `predict_the_future` is called on line 16, the method returns a formatted
string, containing a random choice
from the value returned by the `choices` method, which returns a list of strings.  

'''