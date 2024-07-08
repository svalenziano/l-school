'''
P
    - INPUT: positive or negative integer
    - OUTPUT: time in 24H format

E

D
    - just a string?
A
    - Calc the number of hours
        - Use divmod to get the number of hours and the number of minutes

    
C



'''
MINS_PER_HR = 60
HRS_PER_DAY = 24

def time_of_day(time_in_mins):
    hrs, mins = divmod(time_in_mins, MINS_PER_HR)
    hrs = hrs % HRS_PER_DAY  # If hrs > 24
    return(f"{hrs:02d}:{mins:02d}")


print(time_of_day(0) == "00:00")        # True
print(time_of_day(-3) == "23:57")       # True
print(time_of_day(35) == "00:35")       # True
print(time_of_day(-1437) == "00:03")    # True
print(time_of_day(3000) == "02:00")     # True
print(time_of_day(800) == "13:20")      # True
print(time_of_day(-4231) == "01:29")    # True