'''
P
    in - string
    out - integer, count of 'pair letters'
    req
        ex
            pairs cannot overlap / each letter is counted only once
        imp
E
    see below
D
    list of letters?
A
    - init `count`
    - Create list of chars
    - while True
        - if length is < 2, 
            - return `count`
        - if element at idx is identical to previous element
            - increment the count by one
            - remove the two elements from the list
        - else:
            - remove one element
        
C
'''


# Count the number of 'pair letters' in a given string.
# A pair letter is when two of the same letter appear in sequence.
# Pairs cannot overlap.

def count_duplicates(word):
    count = 0
    lst = list(word)
    while True:
        if len(lst) < 2:
            return count
        if lst[1] == lst[0]:
            count += 1
            lst = lst[2:]  # remove first two elements
        else:
            lst = lst[1:]



print(count_duplicates('success'))  # expected: 2
print(count_duplicates('aabbccc'))  # expected: 3
print(count_duplicates('aabbcccc')) # expected: 4