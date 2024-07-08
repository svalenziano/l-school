''''
P
    - Input: two lists
    - Output: single interleaved list

E


D
A
    - init empty list
    - for each element in enumerate(list1)
    - append the element
    - append the corresonponding item from list2 using the index
    - return list


C




'''

def interleave(lst1, lst2):
    interleaved = []
    for idx, lst1_ele in enumerate(lst1):
        interleaved.append(lst1_ele)
        interleaved.append(lst2[idx])
    return interleaved



list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
expected = [1, "a", 2, "b", 3, "c"]
print(interleave(list1, list2) == expected)      # True