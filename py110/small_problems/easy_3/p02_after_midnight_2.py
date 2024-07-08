'''
P
    -INPUT = time string
    - OUTPUT = minutes before AND after midnight (2 seaprate functions)


E
    - 1800 hrs:
        - before midnight = 2400-1800 = 6* 60 = 360 mins (SUBTRACT FROM 2400)
        - after midnight = 1800 = 18*60 = 1080 mins  (CONVERT DIRECTLY)

D
A
    - after_midnight()
        - Split time into two components: hrs, minutes
        - Convert those components into integers
        - normalize 24 and 0 hrs by using `hrs % 24`
        - calc the number of minutes away from midnight by mult. hrs by 60
    - before midnight?
        - Subtract result of after_midnight() from 24 hrs
        - 

C

'''
MINS_IN_HR = 60
HRS_IN_DAY = 24
MINS_IN_DAY = MINS_IN_HR * HRS_IN_DAY


def after_midnight(string):
    hrs, mins = string.split(':')
    hrs = int(hrs) % HRS_IN_DAY
    return (hrs * MINS_IN_HR) + int(mins)

def before_midnight(string):
    return((MINS_IN_DAY - after_midnight(string)) % MINS_IN_DAY)

print(after_midnight("00:00") == 0)     # True
print(before_midnight("00:00") == 0)    # True
print(after_midnight("12:34") == 754)   # True
print(before_midnight("12:34") == 686)  # True
print(after_midnight("24:00") == 0)     # True
print(before_midnight("24:00") == 0)    # True