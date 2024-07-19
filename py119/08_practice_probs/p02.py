'''
RESULT: DONE IN ~20 MINS, THOUGH I HAD SOME TROUBLE WITH THE `sublists_of_5`
        Helper function.  Specifically, I had trouble with start and stop indexes.
        This is something I should practice!

P
    INPUT = list of ints
    OUTPUT = min sum of 5 consecutive nums in the list
                or
            None if list contains fewer than 5 elements
    REQ
        EX = 
        IMP
E
D
A

    V3
    [SUBLISTS OF 5]
        - INPUT = list of nums
        - OUTPUT = all possible sublists of length 5
        - ALG
            - create a list of lists
                - for each starting index, create a list, using list slicing
                    starting at the start index
                    and
                    ending at the end of the list
            - (comprehension)
                create a new list containing only those lists whose length = 5
    
    [MAIN FUNC]
    - if fewer than 5 elements:
        - return None
    - else:
        - [see helper] Get all combos of '5 consective nums'
        - (comprehension)
            create a list of sums
        - return minimum sum

    V4
    [SUBLISTS OF 5]
        - INPUT = list of nums
        - OUTPUT = all possible sublists of length 5
        - ALG
            - for end_index between 5 and len(lst)
            - create a sublist with:
                start index = end_index - 6
                end index = end_index
            - append that index
            - return
    
    [MAIN FUNC]
    - if fewer than 5 elements:
        - return None
    - else:
        - [see helper] Get all combos of '5 consective nums'
        - (comprehension)
            create a list of sums
        - return minimum sum

'''

def sublists_of_5(lst):
    sublists = [lst[end_idx - 5: end_idx]
                for end_idx in range(5, len(lst) + 1)]   # 0,1,2,3,4

    return sublists

#sublists_of_5([55, 2, 6, 5, 1, 2, 9, 3, 5, 100])

def minimum_sum(lst):
    if len(lst) < 5:
        return None
    else:
        sublists = sublists_of_5(lst)
        return min([sum(sublist) for sublist in sublists])


print(minimum_sum([1, 2, 3, 4]) is None)
print(minimum_sum([1, 2, 3, 4, 5, -5]) == 9)
print(minimum_sum([1, 2, 3, 4, 5, 6]) == 15)
print(minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16)
print(minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10)