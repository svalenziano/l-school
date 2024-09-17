'''
'positive divisors' = nums that can be evenly divided into target number with no remainder.
    Example: 15 ==> divisors are 1, 3, 5
'aliquot sum' = sum of positive divisors.  

Types of numbers, per Nicomachus:
    - perfect numbers = aliquot sum equal to original number
    - abundant numbers = aliquot sum greater than orig number
    - deficient numbers = aliquot sum less than orig number

Examples:
    6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
    28 is a perfect number since its divisors are 1, 2, 4, 7, and 14 and 1 + 2 + 4 + 7 + 14 = 28.
    15 is a deficient number since its divisors are 1, 3, and 5 and 1 + 3 + 5 = 9 which is less than 15.
    24 is an abundant number since its divisors are 1, 2, 3, 4, 6, 8, and 12 and 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater than 24.
    Prime numbers 7, 13, etc. are always deficient since their only divisor is 1.

    
PROMPT:  Write a program that can tell whether a number is perfect, abundant, or deficient.

EXAMINING THE TEST SUITE:
    - 'classify' classmethod
    - Should raise ValueError "Input must be a positive integer"
    - otherwise, return:
        deficient
        perfect
        abundant

EXAMPLES and TESTS
DATA STRUCT
ALGO
    - coerce to integer, raise TypeError if fails
    - ensure number is positive, raise ValueError otherwise
    - get all positive divisors incl 1 but excluding the number itself
    - sum positive divisors
    - return classification

'''
from functools import reduce

class PerfectNumber:
    @classmethod
    def divisors(cls, number):
        if number <= 0:
            raise ValueError("Input must be a positive integer")
        halfway = number // 2
        divisors = [divisor
                    for divisor in range(1, halfway + 2)
                    if number % divisor == 0]
        return divisors
    
    @classmethod
    def classify(cls, number):
        divisors = cls.divisors(number)
        # refreshing my memory of callbacks and lambda
        sum_of_divisors = reduce(lambda x, accum: x + accum, divisors)
        if sum_of_divisors == number:
            return 'perfect'
        elif sum_of_divisors < number:
            return 'deficient'
        else:
            return 'abundant'


if __name__ == "__main__":
    for num in [6, 28, 15, 24]:
        # print(PerfectNumber.divisors(num))
        print(PerfectNumber.classify(num))