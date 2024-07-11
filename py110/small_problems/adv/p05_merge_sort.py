'''
https://launchschool.com/exercises/f62ab8aa


MERGE SORT ALGORITHM

STEP 1:
BREAK LIST DOWN INTO NESTED SUB-LISTS
[9, 2, 7, 6, 8, 5, 0, 1] -->              # initial list
[[9, 2, 7, 6], [8, 5, 0, 1]] -->          # divide into two lists
[[[9, 2], [7, 6]], [[8, 5], [0, 1]]] -->  # divide each sub-list in two
# repeat until each sub-list contains only 1 value
[[[[9], [2]], [[7], [6]]], [[[8], [5]], [[0], [1]]]]


STEP 2:
MERGE BACK TO FLAT, SORTING AS YOU GO
[[[[9], [2]], [[7], [6]]], [[[8], [5]], [[0], [1]]]] -->
[[[2, 9], [6, 7]], [[5, 8], [0, 1]]] -->
[[2, 6, 7, 9], [0, 1, 5, 8]] -->
[0, 1, 2, 5, 6, 7, 8, 9]



P
    INPUT = list
    OUTPUT = SORTED LIST, ASCENDING ORDER
    REQS
        ex
            sort the list using the 'merge sort' recursive algorithm

E
D
    Many lists (recursive)
A
    V1, RECURSIVE (see sketch)
        - Base case = list is length one
        - Alg:
            if len(lst) == 1, return list
            Otherwise, return merge_sort(first have of lst, 2nd half of lst)
C
'''

def merge_sort(lst):
    if len(lst) == 1:
        return lst
    midpoint = len(lst) // 2
    left = lst[:midpoint]
    right = lst[midpoint:]
    return merge( merge_sort(left), merge_sort(right) )

def merge(lst1, lst2):
    result = []
    lst1 = sorted(lst1); lst2 = sorted(lst2)
    while lst1 and lst2:
        if lst1[0] < lst2[0]:
            result.append(lst1.pop(0))
        else:
            result.append(lst2.pop(0))
    return result + lst1 + lst2




'''
*****************************************************************************
LS TESTS
*****************************************************************************
'''
# All of these examples should print True
print(merge_sort([9, 5, 7, 1]) == [1, 5, 7, 9])
print(merge_sort([5, 3]) == [3, 5])
print(merge_sort([6, 2, 7, 1, 4]) == [1, 2, 4, 6, 7])
print(merge_sort([9, 2, 7, 6, 8, 5, 0, 1]) == [0, 1, 2, 5, 6, 7, 8, 9])

original = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel',
            'Kim', 'Bonnie']
expected = ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel',
            'Sue', 'Tyler']
print(merge_sort(original) == expected)

original = [7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54,
            43, 5, 25, 35, 18, 46]
expected = [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25,
            35, 37, 43, 46, 51, 54]
print(merge_sort(original) == expected)