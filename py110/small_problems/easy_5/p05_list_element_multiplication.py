'''
P
    INPUT = two lists
    OUTPUT = product of corresponding list items
E
D
A
    - Comprehension
        - For index in range(len(list_a))
        - Multiple list a elemeent by list b element
C
'''

def multiply_items_v01(lst1, lst2):
    return [lst1[idx] * lst2[idx] for idx in range(len(lst1))]

def multiply_items(lst1, lst2):
    return [num1 * num2 for num1, num2 in zip(lst1, lst2)]

# LS
list_a = [1, 2, 3]
list_b = [4, 5, 6]
print(multiply_items(list_a, list_b) == [4, 10, 18]) # True
