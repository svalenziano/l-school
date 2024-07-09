'''
P
    - INPUT = list of integers of length 1 or greater
    - OUTPUT = integer, 'sum of leading subsequences' see examples below
E
D
A
    - return_leading_subsequences [HELPER]
        - INPUT = list of ints
        - OUTPUT = list of lists of ints
    - [HELPER]
    - [MAIN FUNCTION]
        - return leading subsequences
            - Create range of integers btw 1 and len(list)
            - INIT empty list
            - for each number in the range
                - create list starting at idx 0 and ending at idx = len(list)
                - append sum of list to list
        - We now have a list of sums
        - return the sum of that list (sum of sums)
            
C
'''

def sum_of_sums(lst):
    sums = []
    for length in range(0, len(lst)):
        sums.append(sum(lst[0: length + 1]))
    return sum(sums)


# LS

print(sum_of_sums([3, 5, 2]) == 21)               # True
# (3) + (3 + 5) + (3 + 5 + 2) --> 21

print(sum_of_sums([1, 5, 7, 3]) == 36)            # True
# (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36

print(sum_of_sums([1, 2, 3, 4, 5]) == 35)         # True
# (1) + (1+2) + (1+2+3) + (1+2+3+4) + (1+2+3+4+5) --> 35

print(sum_of_sums([4]) == 4)                      # True