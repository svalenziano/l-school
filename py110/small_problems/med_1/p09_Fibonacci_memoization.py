'''
P
    - Input = int `n`
    - OUtput = `nth` fibonacci number
    - Reqs
        - Use memoization to speed the calculation
        
E
D
    A
        list, index is n - 1.  ie, index 0 represents the 1st fibonacci number
    B
        list starting with [0, 1, 1], representing the 0th, 1st, and 2nd 
            fibonnaci numbers


        
A
    - INIT `memo` as empty dict
    - [FUNCTION]
        - if n == 1 or 2, return 1
        - if n - 2 in `memo`:
            - 
            
            - return `memo` value
        - else:
            - return fib(n - 1) + fib(n - 2)

'''

memo = {}

def fibonacci(n):
    if n <= 2:
        memo[n] = 1
        return 1
    if n - 1 in memo:
        memo[n] =  memo[n - 2] + memo[n - 1]
        return memo[n]
    return fibonacci(n - 2) + fibonacci (n - 1)



# LS Tests
print(fibonacci(1) == 1)                  # True
print(fibonacci(2) == 1)                  # True
print(fibonacci(3) == 2)                  # True
print(fibonacci(4) == 3)                  # True
print(fibonacci(5) == 5)                  # True
print(fibonacci(6) == 8)                  # True
print(fibonacci(12) == 144)               # True
print(fibonacci(20) == 6765)              # True
print(fibonacci(50) == 12586269025)       # True
print(fibonacci(75) == 2111485077978050)  # True