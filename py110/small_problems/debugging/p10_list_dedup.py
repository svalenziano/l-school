'''
RESULT
P
    INPUT = lst
    OUTPUT = lst with duplicates removed
E
D
    exst list?
A
    remove_dups(lst, element, start index) [HELPER]    

    [MAIN FUNC]
    for each item in the list
        if the count of that item is greater than one
            remove all duplicates beyond that index

    how to remove dupes?
    while dupes are present
        find the next occurence, starting at the current index + 1
        pop that item
'''

# UPDATED BY SV
def dedup_list(lst):
    for idx, ele in enumerate(lst):
        while lst.count(ele) > 1:
            next_occurence = lst.index(ele, idx + 1)
            lst.pop(next_occurence)


data = [4, 2, 4, 2, 1, 3, 2, 3, 2, 4, 3]

dedup_list(data)
print(data == [4, 2, 1, 3]) # order not guaranteed



'''
# INITAL STATE
data = [4, 2, 4, 2, 1, 3, 2, 3, 2, 4, 3]
unique_data = list(set(data))
print(unique_data == [4, 2, 1, 3]) # order not guaranteed
'''