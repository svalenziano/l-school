'''
RESULT =  🟢 16 mins, pretty easy!
            Worked pretty flawlessly.  Tested as I went!



P
    Input = list of ints
    Output = integer, diff between the current sum of the numbers, and the nearest prime number greater
                than the current sum.
E
D
    ?
A
    [MAIN]
        Get sum of current list
        Find next largest prime [HELPER]
        Return diff btw prime and current sum
    next_largest_prime [HELPER]
        - add one to number
        - while number is not prime
            - add one to the number
        - return the number
    is_prime(num) [HELPER]
        - PRIME = num that can only be divided by itself and one
        - create list of nums with comprehension
            - for factors between 1 and num (non-inclusive)
            - if num % factor == 0
        - return len(list) > 0
'''

def is_prime(num):
    factors = [factor
               for factor in range(2, num)
               if num % factor == 0]
    return len(factors) == 0

def next_largest_prime(num):
    num += 1
    while not is_prime(num):
        num += 1
    return num

def nearest_prime_sum(lst):
    return next_largest_prime(sum(lst)) - sum(lst)

#for num in [6, 7, 3, 32,]:
#    print(num, next_largest_prime(num))

def ls():
    print(nearest_prime_sum([1, 2, 3]) == 1)        # Nearest prime to 6 is 7
    print(nearest_prime_sum([5, 2]) == 4)           # Nearest prime to 7 is 11
    print(nearest_prime_sum([1, 1, 1]) == 2)        # Nearest prime to 3 is 5
    print(nearest_prime_sum([2, 12, 8, 4, 6]) == 5) # Nearest prime to 32 is 37

    # Nearest prime to 163 is 167
    print(nearest_prime_sum([50, 39, 49, 6, 17, 2]) == 4)
ls()