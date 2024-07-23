'''
P
    INPUT = positive integer
    OUTPUT = integer, sum of the digits
E
D
    ?
A
    Convert int to string
    Use comprehension to convert into list of integers
    Return sum
'''

def sum_digits(integer):
    return sum([int(char)
                for char in str(integer)])



print(sum_digits(23) == 5)              # True
print(sum_digits(496) == 19)            # True
print(sum_digits(123456789) == 45)      # True