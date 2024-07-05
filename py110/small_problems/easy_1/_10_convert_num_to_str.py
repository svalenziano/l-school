'''
PROB
    INPUT = integer
    OUTPUT = string representing the integer
    REQS =
        Ex:
        Implicit: 
            - positive integers only

EXAMPLE AND TESTS


DATA STRUCT


ALG v1 (BEFORE LOOKING AT LS HINT)
    - INIT leftover = the starting value of the input integer
    - Starting place = 10
    - result = '' (empty string)
    - while there's a leftover:
        - LOOP
            - Use modulo to divide by increasing powers of 10.  For example:
                - remainder = 4321 % 10 = 1
                - 4320 % 100 = 20
            - convert the number to a string
            - append the remainder to the BEGINNING of the string
            - subtract result from leftover
            - multiply starting place by 10
            - add remainder to result
    - return result

ALG v2 (after looking at LS hint to use divmod() )
    - INIT leftover = same as input integer
    - INIT result = ''
    - while the leftover is greater than 0
        - INIT left, right = divmod(leftover)
        - convert and append the right side of divmod() to the BEGINNING of the result string 
        - leftover = the left side of divmod()
    - append right side to beginning
    - return result

        
'''

def dig_to_str(i):
    DIGITS = {
        0 : '0',
        1 : '1',
        2 : '2',
        3 : '3',
        4 : '4',
        5 : '5',
        6 : '6',
        7 : '7',
        8 : '8',
        9 : '9',
    }
    if i in DIGITS:
        return DIGITS[i]
    return 'ERROR'

def int_to_str(i):
    if i == 0:
        return '0'
    else:
        leftover = i
        result = ''
        while leftover > 0:
            left, right = divmod(leftover, 10)
            result = dig_to_str(right) + result
            leftover = left
        return result

def tests():
    print(int_to_str(4321) == "4321")              # True
    print(int_to_str(0) == "0")                    # True
    print(int_to_str(5000) == "5000")              # True
    print(int_to_str(1234567890) == "1234567890")  # True

if __name__ == '__main__':
    tests()