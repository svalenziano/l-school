'''
PROBLEM
    - INPUT: number as string
    - OUTPUT: integer
    - REQS:
        - EXPLICIT - don't use int(), ord(), or any other conversion functions
        - IMPLICIT

EXAMPLE AND TEST CASE



DATA STRUCT
    - Dict of conversion values

ALG
    - split string into individual characters (strings of length 1)
    - match character with integer
    - place = 1
    - result = 0
    - for each integer (working from right to left using .pop() )
        - multiply that integer by place and add to result
        - place *= 10
    - return result


'''
CONVERSIONS = {
    '1' : 1,
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    '0' : 0,
}

'''
This was my solution.  Definitely not as clean as LS 😅
'''
def string_to_integer_sv(int_as_str):
    digits = [CONVERSIONS[char] for char in int_as_str]
    value_of_digit = 1
    result = 0
    idx = len(digits) - 1
    while idx >= 0:
        result += digits[idx] * value_of_digit
        value_of_digit *= 10
        idx -= 1
    return result

'''
I was confused by LS solution until I printed the result after each iteration
It multiplies the previous value by 10, which effectively shifts the tens place
by one.
'''
def string_to_integer(s):
    DIGITS = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
    }

    value = 0
    for char in s:
        value = (10 * value) + DIGITS[char]

    return value
    

print(string_to_integer("4321") == 4321)  # True
print(string_to_integer("570") == 570)    # True