'''
https://launchschool.com/exercises/3292ee85

PROB
    - Input: degrees as integer or float
    - Output: String consisting of degrees, minutes, seconds 
        and their corresponding signs
    - Reqs:
        - 60 minutes in a degree
        - 60 seconds in a minute

EX AND TEST


DATA STRUCT


ALG
    - use divmod(x, 1) to extract the degrees and the remainder
    - multiply the remainder by 60 to calc the number of seconds
    - use divmod again (with a divisor of 1) to extract the minutes from the seconds
    - return the formatted string

RESULT:
    - 👎 magic numbers
    - 👍 compact and effective!

'''



DEGREE = "\u00B0"

def pad(integer):
    if integer < 10:
        return '0' + str(integer)
    else:
        return integer

def dms(degrees):
    degrees, remainder = divmod(degrees, 1)
    minutes, remainder = divmod(remainder * 60, 1)
    seconds = int(remainder * 60)
    fstring = f"{int(degrees)}°{pad(int(minutes))}'{pad(seconds)}\""
    return fstring



def ls_tests():
    # All of these examples should print True
    print(dms(30) == "30°00'00\"")
    print(dms(76.73) == "76°43'48\"")
    print(dms(254.6) == "254°35'59\"")
    print(dms(93.034773) == "93°02'05\"")
    print(dms(0) == "0°00'00\"")
    print(dms(360) == "360°00'00\"" or dms(360) == "0°00'00\"")

def ls_neg_tests():
    print(dms(-1))   # -1°00'00"
    print(dms(400))  # 400°00'00"
    print(dms(-40))  # -40°00'00"
    print(dms(-420)) # -420°00'00"

#ls_tests()
ls_neg_tests()