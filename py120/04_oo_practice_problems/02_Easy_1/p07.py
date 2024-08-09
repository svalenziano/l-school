import random

class Oracle:
    def predict_the_future(self):
        return f'You will {random.choice(self.choices())}.'

    def choices(self):
        return [
            'eat a nice lunch',
            'take a nap soon',
            'stay at work late',
            'adopt a cat',
        ]

class RoadTrip(Oracle):
    def choices(self):
        return [
            'visit Vegas',
            'fly to Fiji',
            'romp in Rome',
            'go on a Scrabble cruise',
            'get hopelessly lost',
        ]
    
trip = RoadTrip()
print(trip.predict_the_future())

'''
on line 25, we create an instance of the RoadTrip class and assign it to `trip`.

On line 26, we call the method `predict_the_future` on the `trip` object.  
Since the `predict_the_future` behavior is inherited from `Oracle`, the
method on line 4 will be invoked.  On line 5, a random choice is picked from among
`self.choices`.  In this case, `self` refers to `RoadTrip`, so the list that will
be accessed in the one inside the `RoadTrip` `choices` method.
'''