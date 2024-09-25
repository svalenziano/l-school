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

    def __init__(self, hrs, mins):
        self._hrs = hrs
        self._mins = mins
        

    @classmethod
    def at(cls, hrs, mins=0):
        extra_hrs, mins = cls.convert_mins_to_hrs_mins(mins)

        hrs = hrs + extra_hrs
        clock = Clock(hrs, mins)
        return clock

    def __str__(self):
        return f"{self._hrs:02d}:{self._mins:02d}"

    @classmethod
    def convert_mins_to_hrs_mins(self, mins):
        
        hrs, mins = divmod(mins, Clock.MINS_IN_HR)
        _, hrs = divmod(hrs, Clock.HRS_IN_DAY)

        return hrs, mins
    
    @classmethod
    def convert_hrs_mins_to_mins(self, hrs:int, mins:int):
        return hrs * Clock.MINS_IN_HR + mins

    def __add__(self, mins_to_add:int):
        if not isinstance(mins_to_add, int):
            raise TypeError("ERROR: Minutes argument must be integer.")
        
        mins = Clock.convert_hrs_mins_to_mins(self._hrs, self._mins)
        mins += mins_to_add
        hrs, mins = Clock.convert_mins_to_hrs_mins(mins)

        return Clock.at(hrs, mins)

    def __sub__(self, mins_to_subtract:int):
        return self + (-1 * mins_to_subtract)

    def __eq__(self, other_clock:Clock):
        if not isinstance(other_clock, Clock):
            raise TypeError("ERROR: Can only test for equality between Clock objects")    
        return str(self) == str(other_clock)


    