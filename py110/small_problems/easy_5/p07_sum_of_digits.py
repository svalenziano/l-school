'''
P
    INPUT = positive integer
    OUTPUT = sum of the digits
E
D
A
    - convert int to string
    - split into digits using list()
    - return sum of those digits
C
'''

def sum_digits(integer):
    digits = list(str(integer))
    digits = [int(digit) for digit in digits]
    return sum(digits)


print(sum_digits(23) == 5)              # True
print(sum_digits(496) == 19)            # True
print(sum_digits(123456789) == 45)      # True