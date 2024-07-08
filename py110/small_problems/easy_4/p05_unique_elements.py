'''
P
    input = two lists
    output = the unique elements (objects that aren't in the interection)

E

D

A
    - Get elements only in list1 using set 'difference'
    - Ditto for elements only in list2
    - union those two sets

C
'''


def unique_from_first(lst1, lst2):
    return set(lst1) - set(lst2)


list1 = [3, 6, 9, 12]
list2 = [6, 12, 15, 18]
print(unique_from_first(list1, list2) == {9, 3})