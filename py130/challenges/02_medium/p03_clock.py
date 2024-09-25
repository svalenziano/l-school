'''
Create a clock that is independent of date.

You should be able to add minutes to and subtract minutes from the time represented by a given Clock object. Note that you should not mutate Clock objects when adding and subtracting minutes -- create a new Clock object.

Two clock objects that represent the same time should be equal to each other.

You may not use any built-in date or time functionality; just use arithmetic operations.
'''
from __future__ import annotations

class Clock:
    def at(self, hrs, mins=0):
        '''
        returns clock object
        '''
        pass

    def __str__(self):
        pass

    def __add__(self, minutes:int):
        '''
        OUTPUT: Return new clock object
        REQS:
            - Wrap around at midnight, both forwards and backwards
            - Handle adding more than one day's worth of minutes
        '''
        pass

    def __sub__(self, minutes:int):
        '''
        return new clock object
        REQS:
            - same as __add__
        '''
        pass

    def __eq__(self, other_clock:Clock):
        '''
        
        '''
        pass


    