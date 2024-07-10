'''
P
E
D
A
    If n=1 or 2 (base case)
        return 1
    return fib(n-1) + fib(n-2)

C
'''

def fibonacci(num):
    if num == 1 or num == 2:
        return 1
    return fibonacci(num - 1) + fibonacci(num - 2)


print(fibonacci(1) == 1)         # True
print(fibonacci(2) == 1)         # True
print(fibonacci(3) == 2)         # True
print(fibonacci(4) == 3)         # True
print(fibonacci(5) == 5)         # True
print(fibonacci(6) == 8)         # True
print(fibonacci(12) == 144)      # True
print(fibonacci(20) == 6765)     # True