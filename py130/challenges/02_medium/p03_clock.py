'''
Create a clock that is independent of date.

You should be able to add minutes to and subtract minutes from the time represented by a given Clock object. Note that you should not mutate Clock objects when adding and subtracting minutes -- create a new Clock object.

Two clock objects that represent the same time should be equal to each other.

You may not use any built-in date or time functionality; just use arithmetic operations.
'''
from __future__ import annotations

class Clock:

    MINS_IN_HR = 60
    HRS_IN_DAY = 24

    @classmethod
    def at(cls, hrs, mins=0):
        '''
        returns clock object
        '''
        extra_hrs, mins = cls.convert_mins_to_hrs_mins(mins)

        clock = Clock()
        clock._hrs = hrs + extra_hrs
        clock._mins = mins
        return clock

    def __str__(self):
        return f"{self._hrs:02d}:{self._mins:02d}"

    @classmethod
    def convert_mins_to_hrs_mins(self, mins):
        
        hrs, mins = divmod(mins, Clock.MINS_IN_HR)
        return int(hrs), int(mins)

    def __add__(self, mins_to_add:int):
        '''
        OUTPUT: Return new clock object
        REQS:
            - Wrap around at midnight, both forwards and backwards
            - Handle adding more than one day's worth of minutes
        '''
        if not isinstance(mins_to_add, int):
            raise TypeError("ERROR: Minutes argument must be integer.")
        
        hrs_to_add, mins_to_add = divmod(mins_to_add, Clock.MINS_IN_HR)
        
        mins = self._mins + mins_to_add
        hrs = self._hrs + hrs_to_add

        hrs_to_add, mins = divmod(mins_to_add, Clock.MINS_IN_HR)
        _, hrs_to_add = divmod(hrs, Clock.HRS_IN_DAY)

        return Clock.at(hrs, mins)

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


    