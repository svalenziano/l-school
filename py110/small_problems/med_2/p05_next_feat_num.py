'''
P
    - Input = integer, number to test
    - Output = next largest 'featured number'
    - Reqs
        - Explicit:
            - multiple of 7
            - odd
            - all digits occuring exactly once each
        - Implicit: 
            - Integers only
E
D
A
    - Start with provided integer
    - If not odd, add one
    - While number doesn't fulfil requirements (mult of 7, digits occuring once)
        - add two (you only care about odd numbers)
    - return integer 
C
'''
ERROR = ("There is no possible number that "
         "fulfills those requirements.")

def prompt(x):
    print(f"==> {x}")
    

def mult_of_7(num:int):
    result = not bool(num % 7)
    #prompt(f"{num} is multiple of 7? {result}")
    return result

def unique_digits(num:int):
    digits =  len(str(num))
    unique_digits = len(set(str(num)))
    result = digits == unique_digits
    #prompt(f"{num} ==>  Digits = {digits}, Unique = {unique_digits}. Result = {result}")
    return result

def is_featured(num:int):
    #prompt(num)
    if num > 9876543201:
        return ERROR
    if num % 2 == 0:  # if even
        num += 1      # make odd
    while (not mult_of_7(num)) or (not unique_digits(num)):
        num += 2  # increment to next odd number
        #prompt(num)
    #prompt(f'Returning {num}')
    return num

def my_tests():
    #unique_digits(1)
    #unique_digits(22)
    #unique_digits(123)
    #unique_digits(1231)

    # mult_of_7(6)
    # mult_of_7(7)
    # mult_of_7(8)
    for num in [7*2, 7*3, 7*5, 7*20]:
        print((mult_of_7(num)) and (unique_digits(num)))

#my_tests()

def ls_tests():
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

ls_tests()