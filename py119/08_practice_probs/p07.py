'''
RESULT = 🔴  Train wreck code.  This was a terrible approach, I think.  Maybe worth debugging?

P
    INPUT = list of ints
    OUTPUT = integer: number of identical pairs of ints in that list
    REQS
        IMPL
        EXPL
            - Each number can only count towards a pair once

E

D
    just a count integer?
A
    v1
    - interate through the list.  For each number:
    - If an identical number is found,
        - increment the count
        - remove the pair from the list
    - repeat until no more pairs are found

    v2
    - while start_index < len(lst)
        - for `other_idx` compare all other numbers to `start_idx` (use enumerate?)
            - if they are equal
                - increment count
                - remove the pair from the list using .pop
        - increment start_idx 
'''

def prompt(string):
    print('==>', string)

def pairs(lst):
    prompt(lst)
    pairs = []
    left_idx = 0
    while left_idx < len(lst) - 1:
        for right_idx in range(left_idx + 1, len(lst)):
            prompt(f"{left_idx}>{right_idx}")
            left = lst[left_idx]
            right = lst[right_idx - 1]  # remember that hte list was mutated by the last operation
            if left == right:
                pairs.append((left, right))
                lst.pop(left_idx)
                lst.pop(right_idx)
                break
        left_idx += 1
    prompt(pairs)
    return len(pairs)


def ls_tests():
    print(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) == 3)
    print(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) == 4)
    print(pairs([]) == 0)
    print(pairs([23]) == 0)
    print(pairs([997, 997]) == 1)
    print(pairs([32, 32, 32]) == 1)
    print(pairs([7, 7, 7, 7, 7, 7, 7]) == 3)

ls_tests()