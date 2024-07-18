'''
P
    INPUT = integer
    OUTPUT = next featured num that's greater than the int.  Error msg if no
                next feat num
    REQ
        ex
            Feat num is multiple of 7
            Feat num is odd
            Digits occur exactly once
            max feat num = 9876543201
        imp
E
D   
    just an integer keeping track of the current num
    
A
    v1 high level
        [MAIN]
            Start with provided number
            Increment by one until you find a multiple of 7
            While true
                Increment by 7
                If number is odd and digits occur exactly once
                    Return the number
                If number is greater than `max feat num`:
                    Return error message

        [HELPER]
            input = num
            output = digits ocurring exactly once
            alg:
                convert to str
                for each char
                    if the count of the char is greater than one
                        return false
    
    
C


Goz feedback
    - spending time on numbering things nicely ⌛
'''
MAXIMUM = 9876543201
ERROR = ("There is no possible number that "
         "fulfills those requirements.")

def digits_are_unique(num):
    num = str(num)
    for char in num:
        if num.count(char) > 1:
            return False
    return True

#tests = [1, 101, 99, 1234]
#for test in tests:
#    print(f"UNIQUE? ==> {digits_are_unique(test)}")

def check_featured(num):
    result = (
              (num % 7 == 0) and 
              (num % 2 != 0) and 
              (num <= MAXIMUM) and 
              digits_are_unique(num)
    )
    return result

def is_featured(num):
    num += 1
    # find next multiple of 7
    while not num % 7 == 0:
        num += 1
    # find the next feat num
    while True:
        if check_featured(num):
            #print(num)
            return num
        if num > MAXIMUM:
            #print(num)
            #print('returning error')
            return ERROR
        num += 7

#for i in [12, 21, 35, 1001]:
#    print(f"IS FEATURED ==> {check_featured(i)}")


# LS
print(is_featured(12) == 21)                  # True
print(is_featured(20) == 21)                  # True
print(is_featured(21) == 35)                  # True
print(is_featured(997) == 1029)               # True
print(is_featured(1029) == 1043)              # True
print(is_featured(999999) == 1023547)         # True
print(is_featured(999999987) == 1023456987)   # True
print(is_featured(9876543186) == 9876543201)  # True
print(is_featured(9876543200) == 9876543201)  # True
print(is_featured(9876543201) == ERROR)       # True