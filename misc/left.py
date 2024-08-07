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
    divisor_count = 0
    halfway = int(num / 2)
    for divisor in range(2, halfway + 1):
        if num % divisor == 0:
            divisor_count += 1
            if divisor_count > 3:
                return False
    return divisor_count == 3


def solution(n, m):
    result = [num
              for num in range(n, m + 1)
              if has_three_divisors(num)]
    return result

print(solution(2, 100))
print(solution(10000, 100000))
print(solution(624, 625))
print(solution(625, 626))
print(solution(734, 735))