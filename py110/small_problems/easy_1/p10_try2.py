'''
P
    in = integer
    out = string representation of integer
    reqs
        - don't use str() or any similar functions.  Do math yo!

E
    below
D
    integer and string
A
    Tests
        - divmod(4321, 10) == (432, 1)
        - divmod(21, 10) = (2, 1)
        - divmod(2, 10) = (0, 2)
    v1
        - create a lookup list to convert digits into strings
        - `result` = ''
        - while num % 10 > 0:
            - use divmod to pop the right digit off the number
            - convert the digit to a string and append to the beginning of `result`
            - update `num`
        - Deal with the final digit: append num to `result`
        - return `result`
'''

def integer_to_string(num):
    digits = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
    ]
    result = ''
    while num // 10 > 0:
        num, remainder = divmod(num, 10)
        result = (digits[remainder]) + result
    result = (digits[num]) + result
    return result

print(integer_to_string(4321) == "4321")              # True
print(integer_to_string(0) == "0")                    # True
print(integer_to_string(5000) == "5000")              # True
print(integer_to_string(1234567890) == "1234567890")  # True