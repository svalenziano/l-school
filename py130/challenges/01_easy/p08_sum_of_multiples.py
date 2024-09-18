'''
PROMPT:
Write a program that, given a natural number and a set of one or more other numbers, can find the sum of all the multiples of the numbers in the set that are less than the first number. If the set of numbers is not given, use a default set of 3 and 5.

For instance, if we list all the natural numbers up to, but not including, 20 that are multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18. The sum of these multiples is 78.

MY NOTES:
- natural number = non-negative integers. 0, 1, 2, etc...

P
    THE PROBLEM IN MY OWN WORDS
    Given a set of numbers 'A', an an integer 'B', find all multiples of the numbers in 'A' that are less than 'B', and then return the sum of those multiples.
    
    INPUT
        - set of numbers - we care about the multiples of these numbers
        - "sum up to" integer - we care about the multiples that are less than this number
    OUTPUT
        - Integer


E
    (3, 5) and 10: 3+6+9 + 5 = 23
D

A
    v1 high level
    - if caller is class:
        - use (3, 5)
    - if caller is instance:
        - 
    - find all multiples of 'A' that are less than 'B'
    - return sum of those multiples

    
    
    v1 low level
    - sum_up_to CLASSMETHOD
        - if call
        - for each number inside set 'A'
            - find multiples that are less than 'B' using GENERATOR
        - return sum
    - to INSTANCE METHOD
        - call sum_up_to CLASSMETHOD
            - pass self._nums as `nums` argument

'''

class SumOfMultiples:
    DEFAULT_NUMS = (3, 5)
    
    def __init__(self, nums=DEFAULT_NUMS):
        self._nums = nums
    
    @classmethod    
    def multiples_up_to(cls, number, upper_limit):
        if number >= upper_limit:
            return 0
        multiple = number
        while multiple < upper_limit:
            yield multiple
            multiple += number  # only consider multiples of 'number'
    
    @classmethod
    def sum_up_to(cls, upper_limit=0):
        multiples = [multiple
                     for num in nums
                     for multiple in cls.multiples_up_to(num, upper_limit)]
        return sum(multiples)
    
    def to(self, upper_limit):
        return SumOfMultiples.sum_up_to(self._nums, upper_limit)

if __name__ == '__main__':
    print(list(SumOfMultiples.multiples_up_to(3, 99)))
    print(SumOfMultiples.sum_up_to(1))