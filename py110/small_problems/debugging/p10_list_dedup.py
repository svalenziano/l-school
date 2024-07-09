'''
P
    - list
    - list withiout dups, order preserved
E
D
A
    - Create a set from the list
    - for each member of the set
        - Find the first occurance in the list
        - While the count of that element (in the list) is greater than one:
            - Discard the next occurance of the element (don't discard the first occurance)
C
'''



# ORIGINAL FROM LS
data = [4, 2, 4, 2, 1, 3, 2, 3, 2, 4, 3]
unique_data = list(set(data))
#print(unique_data == [4, 2, 1, 3]) # order not guaranteed



# SV v1
from copy import deepcopy

def dedup_v01(orig_lst):
    new_lst = deepcopy(orig_lst)
    for member in set(new_lst):
        first_idx = new_lst.index(member)
        while new_lst.count(member) > 1:
            #print(new_lst)
            next_idx = new_lst.index(member, first_idx + 1)
            #print('removed ', new_lst.pop(next_idx), f'at index {next_idx}')
            new_lst.pop(next_idx)
    return new_lst


data = [4, 2, 4, 2, 1, 3, 2, 3, 2, 4, 3]
unique_data = dedup_v01(data)
print(unique_data == [4, 2, 1, 3]) # order not guaranteed


# SV v2.
# LS solution was much simpler than mine.  Here's my 2nd attempt

def dedup(orig_list):
    new_lst = []
    seen = set()
    for num in orig_list:
        if num not in seen:
            new_lst.append(num)
            seen |= {num}
    return new_lst

data = [4, 2, 4, 2, 1, 3, 2, 3, 2, 4, 3]
unique_data = dedup(data)
print(unique_data == [4, 2, 1, 3]) # order not guaranteed