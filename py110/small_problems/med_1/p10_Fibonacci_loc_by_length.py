'''
P
    - Input = number of digits desired in fibonacci number (integer)
    - Output = first fibonacci number that will result in that number of digits (int)
E
D
A
    Length examples:
    10 ** 2 = 100
    10 ** 3 = 1000

    - INIT fib_num = 1
    - While fib(fib_num) is < 10 ** (digits - 1)
        - Increment fib_num
    - return fib_num
C
'''

def find_fibonacci_index_by_length(length):
    nth = 1
    while fibonacci(nth) < 10 ** (length - 1):
        nth += 1
    return nth




memo = {}

def fibonacci(n):
    if n <= 2:
        memo[n] = 1
        return 1
    if n - 1 in memo:
        memo[n] =  memo[n - 2] + memo[n - 1]
        return memo[n]
    return fibonacci(n - 2) + fibonacci (n - 1)







# LS TESTS ******************************************************************


# All of these examples should print True
# The first 12 fibonacci numbers are: 1 1 2 3 5 8 13 21 34 55 89 144
print(find_fibonacci_index_by_length(2) == 7)
print(find_fibonacci_index_by_length(3) == 12)
print(find_fibonacci_index_by_length(10) == 45)
print(find_fibonacci_index_by_length(16) == 74)
print(find_fibonacci_index_by_length(100) == 476)
print(find_fibonacci_index_by_length(1000) == 4782)

# Next example might take a little while on older systems
print(find_fibonacci_index_by_length(10000) == 47847)