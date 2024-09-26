from datetime import date, timedelta
from calendar import monthrange

class Meetup:

    DAYS_IN_WK = 7

    def __init__(self, year, month):
        self._year = year
        self._month = month
    
    @classmethod
    def map_nth(cls, nth):
        equivalents = {
            'first': 1,
            'second': 2,
            'third': 3,
            'fourth': 4,
            'fifth': 5,
        }
        if nth in equivalents:
            return equivalents[nth]
        else:
            raise ValueError(f'Cannot convert this value: {nth}')
        
    @classmethod
    def convert_weekday(cls, weekday):
        isoweekdays = {
            'Monday': 1 ,
            'Tuesday': 2 ,
            'Wednesday': 3 ,
            'Thursday': 4 ,
            'Friday': 5 ,
            'Saturday': 6 ,
            'Sunday': 7 ,
        }
        if isinstance(weekday, int):
            return list(isoweekdays.keys())[weekday - 1]
        else:
            return isoweekdays[weekday]

    @property
    def thirteenth_of_the_month(self):
        return date(self._year, self._month, 13)
    
    @property
    def last_day_of_the_month(self):
        _, last_day = monthrange(self._year, self._month)
        return date(self._year, self._month, last_day)

    def day(self, day_of_wk, nth):
        
        def increment_to_weekday(current_day:date, 
                                 desired_isoweekday:int, 
                                 increment:int):
            while current_day.isoweekday() != desired_isoweekday:
                current_day += timedelta(days=increment)
            return current_day
        
        weekday_iso = Meetup.convert_weekday(day_of_wk)
        if nth == 'teenth':
            test_date = self.thirteenth_of_the_month
            test_date = increment_to_weekday(test_date, weekday_iso, 1)
            return test_date
        if nth == 'last':
            test_date = self.last_day_of_the_month
            test_date = increment_to_weekday(test_date, weekday_iso, -1)
            return test_date
        else:
            nth = Meetup.map_nth(nth)
            test_date = date(self._year, self._month, 1)
            test_date = increment_to_weekday(test_date, weekday_iso, 1)
            if nth == 1:
                return test_date
            else:
                difference = timedelta((nth - 1) * Meetup.DAYS_IN_WK)
                test_date += difference
                # If we overflow to the next month
                if test_date.month != self._month:
                    return None
                return test_date