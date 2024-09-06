'''
Unpack the first two elements from a list and store the remaining elements in another list.
'''
numbers = [1, 2, 3, 4, 5, 6]

first, second, *remaining = numbers

print(first)
print(second)
print(remaining)