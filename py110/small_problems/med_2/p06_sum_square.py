'''
P
    - Input = integer
    - Output = integer
E
D
A
    - Calc the square of the sum of integers between 1 and the 
        provided integer, inclusive.  Ex: 3 ==> (1 + 2 + 3) ** 2
    - Calc the sum of the squares of integers...
        Ex: 3 ==> (1**2 + 2**2 + 3**2)
    - Subtract the second sum from the first
    - Return the result

C
'''
def square_of_sum(int):
    return sum(range(1, int + 1)) ** 2

def sum_of_squares(int):
    return sum([num**2 for num in range(1, int + 1)])

def sum_square_difference(int):
    return square_of_sum(int) - sum_of_squares(int)


def ls_tests():
    print(sum_square_difference(3) == 22)          # True
    # 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)

    print(sum_square_difference(10) == 2640)       # True
    print(sum_square_difference(1) == 0)           # True
    print(sum_square_difference(100) == 25164150)  # True

ls_tests()