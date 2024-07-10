'''
P
    - input = year (integer)
    - output = integer representing 
            the number of friday-the-13ths in that calendar year
    - reqs:
        only needs to work for dates greater than 1752
E
D
    ?
A
    - Args
        - `year`
    - count = 0
    - For each month of the year (range 1, 12 + 1)
        - if the 13th of that month is a Friday (use date.weekday() == 4)
            increment the count
    - return the count
C
'''

from datetime import date



def friday_the_13ths(year:int):
    # 4 = friday, see https://docs.python.org/3/library/datetime.html#datetime.date
    FRIDAY = 4
    UNLUCKY = 13
    JAN = 1
    DEC = 12
    count = 0
    months = range(JAN, DEC + 1)
    for month in months:
        if date(year, month, UNLUCKY).weekday() == FRIDAY:
            count += 1
    return count


print(friday_the_13ths(1986) == 1)      # True
print(friday_the_13ths(2015) == 3)      # True
print(friday_the_13ths(2017) == 2)      # True
