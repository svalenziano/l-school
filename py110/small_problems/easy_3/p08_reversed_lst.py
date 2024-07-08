'''
P
    Input = list of ints
    Output = reversed list
    Side effect = mutate the exst list

E

D

A
    - INIT index variable equal to length of list minus one
    - INIT an empty list
    - While index > 0:
        - Append the list element at index
        - Decrement the index by one
    - Clear the original list
    - extend the new list onto the original list
    - return the orig list

C

'''
def reverse_list(lst):
    idx = len(lst) -1
    temp_lst = []
    while idx >= 0:
        temp_lst.append(lst[idx])
        idx -= 1
    lst.clear()
    lst.extend(temp_lst)
    return lst

# this is the LS solution
def reverse_list_ls(lst):
    first = 0
    last = -1

    while first < (len(lst) // 2):
        lst[first], lst[last] = lst[last], lst[first]
        first += 1
        last -= 1
    return lst


list1 = [1, 2, 3, 4]
result = reverse_list(list1)
print(result == [4, 3, 2, 1])               # True
print(list1 is result)                      # True

list2 = ["a", "b", "c", "d", "e"]
result2 = reverse_list(list2)
print(result2 == ['e', 'd', 'c', 'b', 'a']) # True
print(list2 is result2)                     # True

list3 = ["abc"]
result3 = reverse_list(list3)
print(result3 == ['abc'])                   # True
print(list3 is result3)                     # True

list4 = []
result4 = reverse_list(list4)
print(result4 == [])                        # True
print(list4 is result4)                     # True