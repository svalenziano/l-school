'''
RESULT = 🟢 Easily solved in ~10-12 mins, unlike my train wreck first attempt.

P
    INPUT = list of ints
    OUTPUT = num of identical pairs of ints in that list
    REQS
        - Count each complete pair once (do not share integers btw pairs)
E
D
A
    v1 high level
    pairs = []
    for each integer:
        if the count of that integer is greater than one:
            append the integer to `pairs`
            remove the pair using `remove` (to avoid index issues re: mutate while iterate)
    repeat until there are no more pairs

    testing the alg:
        [32, 32, 32]
    
    v1 low level
    INDEFINITE ITERATION
    while True? [ SELECTED]
        return when index = len()
    
    for idx, int in enumerate()?
        if idx = len
'''

def prompt(string):
    print('==>', string)

def pairs(lst):
    lst = lst.copy()
    lst_of_pairs = []
    idx = 0
    while idx < len(lst):
        num = lst[idx]
        if lst.count(num) > 1:
            lst_of_pairs.append(num)
            # remove the pair
            lst.remove(num)
            lst.remove(num)
            idx = 0
        else:
            idx += 1
    return len(lst_of_pairs)

def ls_tests():
    print(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) == 3)
    print(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) == 4)
    print(pairs([]) == 0)
    print(pairs([23]) == 0)
    print(pairs([997, 997]) == 1)
    print(pairs([32, 32, 32]) == 1)
    print(pairs([7, 7, 7, 7, 7, 7, 7]) == 3)

ls_tests()