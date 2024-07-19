'''
https://launchschool.com/lessons/5638850f/assignments/deba736a
RESULT = EASY, DONE IN 15 MINS!

PEDAC:
P
    IN = list of nums
    OUT =  list: 
                - for each number, determine how many numbers in the 
                  list are smaller than that number
    REQS
        EX
            Only count unique values
        IMP
E
D
    ?
A
    `count_less_than` [HELPER]    
        - INPUT = , number to test, list of numbers
        - Output = integer: count of numbers that are smaller than
        - Alg
            - create set?
            - use comprehension:
                - for each number in set, append number if smaller than `number to test`
            - return len() of the comprehension-created list

    [MAIN FUNC]
    - INIT `result` list = []
    - for each num in the list
        - `greater_than` = [determine how many numbers in the set are smaller than each num]
        - append `greater_than` to `result`
    - return `result`
'''

def count_less_than(num, lst):
    lst = set(lst)
    less_than = [set_num for set_num in lst if set_num < num]
    return len(less_than)

# print(count_less_than(5, [1,2,3,3,3,3,4]))

def smaller_numbers_than_current(lst):
    return [count_less_than(num, lst)
            for num in lst]


print(smaller_numbers_than_current([8, 1, 2, 2, 3]) == [3, 0, 1, 1, 2])
print(smaller_numbers_than_current([7, 7, 7, 7]) == [0, 0, 0, 0])
print(smaller_numbers_than_current([6, 5, 4, 8]) == [2, 1, 0, 3])
print(smaller_numbers_than_current([1]) == [0])

my_list = [1, 4, 6, 8, 13, 2, 4, 5, 4]
result   = [0, 2, 4, 5, 6, 1, 2, 3, 2]
print(smaller_numbers_than_current(my_list) == result)