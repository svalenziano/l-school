'''
P
    Input = two lists of ints
    Output = one list of products

Alg
    Comprehension


'''

def multiply_list(list1, list2):
    print(list(zip(list1, list2)))
    return [a * b for a, b in zip(list1, list2)]

list1 = [3, 5, 7]
list2 = [9, 10, 11]
print(multiply_list(list1, list2) == [27, 50, 77])  # True