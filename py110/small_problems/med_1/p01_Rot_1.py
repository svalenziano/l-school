'''
P
    INPUT = list
    Return = MOVE FIRST ELEMENT TO THE END OF THE LIST.  Return new list.
        Do not mutate.
    Reqs
        Ex
            If input = empty, return empty list
            If input is not a list, return None
E
D
A
    - If input isn't list
        - Return None
    - Deal with empty list?
    - INIT list as a deepcopy of the orig list
    - pop the first element and append it to the end of the first list
    - return the new list
C
'''
from copy import deepcopy

def rotate_list(orig_lst):
    if not isinstance(orig_lst, list):
        return None
    if not orig_lst:
        return []
    new_lst = deepcopy(orig_lst)
    last = new_lst.pop(0)
    new_lst.append(last)
    return new_lst

# All of these examples should print True

print(rotate_list([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7])
print(rotate_list(['a', 'b', 'c']) == ['b', 'c', 'a'])
print(rotate_list(['a']) == ['a'])
print(rotate_list([1, 'a', 3, 'c']) == ['a', 3, 'c', 1])
print(rotate_list([{'a': 2}, [1, 2], 3]) == [[1, 2], 3, {'a': 2}])
print(rotate_list([]) == [])

# return `None` if the argument is not a list
print(rotate_list(None) == None)
print(rotate_list(1) == None)

# the input list is not mutated
lst = [1, 2, 3, 4]
print(rotate_list(lst) == [2, 3, 4, 1])
print(lst == [1, 2, 3, 4])