'''
P
    input = integer
    output = True (if prime) or False.
    Reqs
        Ex
            1 is not prime
            Prime = only divisible by itself and 1
E
D
A
    INIT an empty set()
    For each number btw 1 and 'the number' (range)
        Use modulo to determine the remainder
        If the modulo is not zero:
            `.add()` the number to the set
    Determine if the set is identical to {1, `the number`}
    Return the result
C
'''

def is_prime(test_int):
    result = set()
    if test_int == 1:
        return True
    for num in range(1, test_int + 1):
        if test_int % num == 0:
            result.add(num)
    return result == {1, test_int}




# LS TESTS
print(is_prime(1) == False)              # True
print(is_prime(2) == True)               # True
print(is_prime(3) == True)               # True
print(is_prime(4) == False)              # True
print(is_prime(5) == True)               # True
print(is_prime(6) == False)              # True
print(is_prime(7) == True)               # True
print(is_prime(8) == False)              # True
print(is_prime(9) == False)              # True
print(is_prime(10) == False)             # True
print(is_prime(23) == True)              # True
print(is_prime(24) == False)             # True
print(is_prime(997) == True)             # True
print(is_prime(998) == False)            # True
print(is_prime(3_297_061) == True)       # True
print(is_prime(23_297_061) == False)     # True