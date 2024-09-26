'''
Meetups are a great way to meet people who share a common interest. Typically, meetups happen monthly on the same day of the week. For example, a meetup's meeting may be set as:

    The first Monday of January 2021
    The third Tuesday of December 2020
    The teenth Wednesday of December 2020
    The last Thursday of January 2021

In this program, we'll construct objects that represent a meetup date. Each object takes a month number (1-12) and a year (e.g., 2021). Your object should be able to determine the exact date of the meeting in the specified month and year. For instance, if you ask for the 2nd Wednesday of May 2021, the object should be able to determine that the meetup for that month will occur on the 12th of May, 2021.

The descriptors that may be given are strings: 'first', 'second', 'third', 'fourth', 'fifth', 'last', and 'teenth'. The case of the strings is not important; that is, 'first' and 'fIrSt' are equivalent. Note that "teenth" is a made up word. There was a meetup whose members realized that there are exactly 7 days that end in '-teenth'. Therefore, it's guaranteed that each day of the week (Monday, Tuesday, ...) will have exactly one date that is the "teenth" of that day in every month. That is, every month has exactly one "teenth" Monday, one "teenth" Tuesday, etc. The fifth day of the month may not happen every month, but some meetup groups like that irregularity.

The days of the week are given by the strings 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', and 'Sunday'. Again, the case of the strings is not important.

date.weekday()
    1 Monday
    2 Tues
    3 Wed
    4 Thurs
    5 Fri
    6 Sat
    7 Sun
'''
from datetime import date, timedelta

class Meetup:
    def __init__(self, year, month):
        self._year = year
        self._month = month
    
    def day(self, day, nth):
        '''
        INPUT: day of week, nth day (of that day) of that month
            - Nth day of month
                - first
                - second
                - third
                - fourth
                - fifth
                - last
                - teenth
        OUTPUT: datetime.date object
            - If a suitable date can be found:
                - date object, representing the day that fits all requirements:
                    - Year (self._year)
                    - Month (self._year)
                    - Day of week
                    - Nth 'Day of week' of that month
            - Else:
                - None
        ALGO:
            - If 'nth' is 'teenth'
                - Set current day to the 13th of the month
                - Check to see if it matches the desired day of the week
                - HELPER = Increment by one until the desired day of the week is found
            - If 'nth' is 'last':
                - Set current day to the last day of the month
                - Check to see if it matches the desired day of the week
                - HELPER = Increment by negative one until the desired day of the week is found
            - Else:
                - Convert nth day ('first', 'second', ...) to integer (1-4)
                - Find the first `day of the week` in that month
                    - start from the first day of the month
                    - HELPER = increment days until the correct day is found
                - If nth == 1:
                    - return the day
                - Else:
                    - create a time delta using (nth - 1) * 7 days/wk
                    - return the current day + timedelta
        '''
        pass