'''
P
    - INPUT = list of integers
    - OUTPUT = list of integers, consecutive duplicates removed
E
D
A
    - INIT `last_int` variable
    - INIT `result`
    - For each integer in the lst
        - if current int is NOT identical to `last_int`, append the int onto `result`
        - update `lst_int`, assign it the value of the current int
    - return result
C
'''
def unique_sequence(lst):
    last_num = 'placeholder'
    result = []
    for num in lst:
        if num != last_num:
            result.append(num)
        last_num = num
    return result


original = [1, 1, 2, 6, 6, 6, 5, 5, 3, 3, 3, 4]
expected = [1, 2, 6, 5, 3, 4]
print(unique_sequence(original) == expected)      # True


original = [1, 1, 2, 2, 2, 1, 1, 1]
expected = [1, 2, 1]
print(unique_sequence(original) == expected)      # True