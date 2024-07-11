'''
P
    INPUT = two sorted lists
    OUTPUT = list.  Contains all elements from both lists, sorted ascending order
        EX
            Cannot sort the result list.  Must build the result list one element at a time
                in the proper order
            Don't mutate input lists
        IMPL
            Return new object

    Q'S
E
    See below
D
    list?
A
    V1
    - `result` = []
    - sort input lists (return new objs / reassign, don't mutate)
        - Alt: copy the lists.  Assumes they're already sorted
    - while the lengths of both lists are greater than 0
        - compare the 0th element of both lists (use tuple unpacking)
        - pop and append the smaller of the two onto `result`
    - for each list of `leftovers`
        - `extend` `result` with the contents of `leftovers`
    - return `result
C
'''

def merge(lst1, lst2):
    result = []
    lst1 = sorted(lst1); lst2 = sorted(lst2)
    while lst1 and lst2:
        if lst1[0] < lst2[0]:
            result.append(lst1.pop(0))
        else:
            result.append(lst2.pop(0))
    return result + lst1 + lst2



# All of these examples should print True
print(merge([1, 5, 9], [2, 6, 8]) == [1, 2, 5, 6, 8, 9])
print(merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3])
print(merge([], [1, 4, 5]) == [1, 4, 5])
print(merge([1, 4, 5], []) == [1, 4, 5])

names1 = ['Alice', 'Kim', 'Pete', 'Sue']
names2 = ['Bonnie', 'Rachel', 'Tyler']
names_expected = ['Alice', 'Bonnie', 'Kim', 'Pete',
                  'Rachel', 'Sue', 'Tyler']
print(merge(names1, names2) == names_expected)