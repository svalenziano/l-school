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
'''

class PerfectNumber:
    pass