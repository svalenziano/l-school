'''
https://www.codewars.com/kata/65eb2c4c274bd91c27b38d32/train/python
P
    Input = two integers `n` and `m`
    Output = sorted array of all ints `n` to `m` INCLUSIVE, 
                which have exactly 3 divisors, 1 and the number excluded
E
D
A
    three_divisors [HELPER]
        - for every num (excluding 1 and the num)
            - include the number if a modulo operation results in 0 remainder

    main_func
        - for every num between n and m INCLUSIVE
            - include the number if `three_divisors` returns True
'''
def has_three_divisors(num):
    halfway = int(num / 2)
    divisors = [divisor
                for divisor in range(2, halfway + 1)
                if num % divisor == 0]
    return len(divisors) == 3


def solution(n, m):
    result = [num
              for num in range(n, m + 1)
              if has_three_divisors(num)]
    return result