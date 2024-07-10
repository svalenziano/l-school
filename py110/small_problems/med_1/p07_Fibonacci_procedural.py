'''
P
    input = integer
    output = nth fibonacci number
E
D
A
    - v1
        - if 1 ==> 1
        - if 2 ==> 1
        - INIT = `result` = 0
        - pop
        - append
    - v2
        - ARG = `input`
        - if 1, return 1
        - if 2, return 1
        - if >2
            - numbers = [1, 1]
            - for number in range between 3 and `input` (non-inclusive of end index)
                - numbers = [ numbers[1], sum(numbers) ]
            - return sum(numbers)
        - else return None


C
'''

def fibonacci(integer):
    if not isinstance(integer, int) or integer < 1:
        return None
    if integer in [1, 2]:
        return 1
    numbers = [1, 1]
    for num in range(3, integer):
        numbers = [numbers[1], sum(numbers)]
    return sum(numbers)
    


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