from fractions import Fraction

'''
https://launchschool.com/exercises/17162736

P
[egyptian]
    V1 high level
    - create an integer `sum` to keep track of how the current sum 
        relates to the target number
    - while the `sum` is less than `target`, 
        - find the largest Rational Number that can be added to the `sum`
            without exceeding the `target`
    - return the list of denominators

    V1 low level
    - sum = 0
    - `denominators` = 0
    - while 1 / sum < `target`
        `denominator`= 1
        - while 1 / `denominator` + `sum` > `target`
            - 


[unegyptian]

E
D
A
C

RESULT: worked, pretty easily! The only stumbling block that I encountered was 
    trying to compare floats instead of using Fraction universally.
'''


'''
*****************************************************************************
MY ATTEMPT
Result: v close to LS solution.  I could have done it without the `total` var
    if I had just subtracted each fraction from the target
*****************************************************************************
'''
from math import isclose

def egyptian(target):
    total = 0
    denominators = []
    denominator = 1
    while total < target:
        while (Fraction(1, denominator) + total) > target:
            denominator += 1
        denominators.append(denominator)
        total = sum( [Fraction(1, d) for d in denominators])     # sum of all fractions
        denominator += 1
    return denominators

def unegyptian(denominators:list):
    return sum( [Fraction(1, d) for d in denominators])


'''
RECURSIVE?
'''


'''
*****************************************************************************
LS TESTS
*****************************************************************************
'''

def ls_tests():

    # Using the egyptian function
    # Your results may differ for these first 3 examples
    print(egyptian(Fraction(2, 1)))      # [1, 2, 3, 6]
    print(egyptian(Fraction(137, 60)))   # [1, 2, 3, 4, 5]
    print(egyptian(Fraction(3, 1)))
    # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

    # Using the unegyptian function
    # All of these examples should print True
    print(unegyptian(egyptian(Fraction(1, 2))) == Fraction(1, 2))
    print(unegyptian(egyptian(Fraction(3, 4))) == Fraction(3, 4))
    print(unegyptian(egyptian(Fraction(39, 20))) == Fraction(39, 20))
    print(unegyptian(egyptian(Fraction(127, 130))) == Fraction(127, 130))
    print(unegyptian(egyptian(Fraction(5, 7))) == Fraction(5, 7))
    print(unegyptian(egyptian(Fraction(1, 1))) == Fraction(1, 1))
    print(unegyptian(egyptian(Fraction(2, 1))) == Fraction(2, 1))
    print(unegyptian(egyptian(Fraction(3, 1))) == Fraction(3, 1))

ls_tests()