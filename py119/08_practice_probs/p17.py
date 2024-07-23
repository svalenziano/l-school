'''
RESULT = 🟢 pretty easy although I didn't time myself :*(


P
    IN = list of ints
    OUT = min int that can be appended to the list, sum lst must equal the closest
        prime # that's greater than the sum of the ints
E
D
A
    [IS PRIME]
        input = integer
        output = bool, Is the number prime?
        Reqs
            Prime # = number with whose only divisors are one and itself
        Alg
            Set comprehension to determine multiples other than one and num:
                divisor
                for every divisor btw 2 and num - 1 (skip 1 and num)
                if modulo num % divisor == 0 (divides evenly)
            return True if the set is empty
            otherwise, return False

    [NEAREST PRIME]
        INPUT = num
        output = nearest prime # (greater than num)
        Alg
            while number isn't prime (see helper above)
            increment num
        

    [MAIN FUNC]
        Get sum of ints
        Find nearest prime # (greater than sum)
        Return diff
'''

def is_prime(integer):
    factors = {divisor
               for divisor in range(2, integer)
               if integer % divisor == 0}
    #print(integer, ' ==> ',factors)
    return not bool(factors)


def nearest_prime(integer):
    integer += 1
    while True:
        if is_prime(integer):
            return integer
        integer += 1

def nearest_prime_sum(lst_of_ints):
    sum_ = sum(lst_of_ints)
    return nearest_prime(sum_) - sum_


print(nearest_prime_sum([1, 2, 3]) == 1)        # Nearest prime to 6 is 7
print(nearest_prime_sum([5, 2]) == 4)           # Nearest prime to 7 is 11
print(nearest_prime_sum([1, 1, 1]) == 2)        # Nearest prime to 3 is 5
print(nearest_prime_sum([2, 12, 8, 4, 6]) == 5) # Nearest prime to 32 is 37

# Nearest prime to 163 is 167
print(nearest_prime_sum([50, 39, 49, 6, 17, 2]) == 4)