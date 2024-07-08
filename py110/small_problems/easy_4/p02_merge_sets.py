def merge_sets(lst1, lst2):
    lst1 = set(lst1)
    lst2 = set(lst2)
    return lst1 | lst2


list1 = [3, 5, 7, 9]
list2 = [5, 7, 11, 13]
print(merge_sets(list1, list2) == {3, 5, 7, 9, 11, 13})
# Prints True