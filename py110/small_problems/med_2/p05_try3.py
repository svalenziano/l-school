'''
RESULT = 🟢 finally, had a really easy go of it!
            I wrote and tested my helpers before attempting the main function.
            Avoided the duplicate logic that plagued my previous attempts.
P
    INPUT = integer
    OUTPUT = 
        - return next featured number greater than the arg
        - error message if number exceeds the max
    REQS
        EX
            feat number:
                multiple of 7
                odd (not a multiple of 2)
                all digits occur no more than once
                maximum = 9876543201
        IMP
            input integer must be POSITIVE (per LS tests)
E
D
A
    v1 high level
    digits_occur_once [HELPER]
        - convert to string
        - for char in string
            - if the count of char is greater than one, return False
        - return True
    is_featured [HELPER]
        - if number is multiple of 7, odd, digits occur no more than once
            -return true
    [MAIN]
        - Increment by one (cannot be equal to the arg)
        - Check if number is featured
        - Find next multiple of 7
        - while number is smaller than the `max`
            - if number is featured
                - return number
            - add 7
        - return error message
'''
MAX = 9876543201

def digits_occur_once(num):
    num = str(num)
    for char in num:
        if num.count(char) > 1:
            return False
    return True

def test_featured(num):
    if num % 7 == 0 and num % 2 == 1 and digits_occur_once(num):
        return True
    return False

def is_featured(num):
    num += 1
    if test_featured(num):
        return num
    while not num % 7 == 0:
        num += 1
    while num < MAX:
        if test_featured(num):
            return num
        num += 7
    error = ("There is no possible number that "
         "fulfills those requirements.")
    return error

def ls():
    print(is_featured(12) == 21)                  # True
    print(is_featured(20) == 21)                  # True
    print(is_featured(21) == 35)                  # True
    print(is_featured(997) == 1029)               # True
    print(is_featured(1029) == 1043)              # True
    print(is_featured(999999) == 1023547)         # True
    print(is_featured(999999987) == 1023456987)   # True
    print(is_featured(9876543186) == 9876543201)  # True
    print(is_featured(9876543200) == 9876543201)  # True

    error = ("There is no possible number that "
            "fulfills those requirements.")
    print(is_featured(9876543201) == error)       # True

ls()
