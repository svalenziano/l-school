'''
RESULT = 34 MINS 😭
         I had a LOT of trouble with return_list_of_pairs.  
         My final answer was pretty dirty.
         I fundamentally misunderstood WHAT I WAS TRYING TO ACCOMPLISH: every
         combo of 2 numbers possible.  Definitely need to revisit.

P
    INPUT = list of ints
    OUTPUT = tuple of 2 nums that are closest together in value
    REQS
        ex: 
            if there are mult pairs that occur equally as close, return 
            the pair that occurs first
        impl
            occurs first = INDEX OF 1ST ELEMENT IS LOWEST

E
D
    - list of diffs?
A

    return_list_of_pairs [HELPER]
        - for end_index (range(1, len(lst)))
            - for start index in range(0, len(lst) - 1)
                - if end doesn't equal start
                    -append

    [MAIN FUNC]
        - [HELPER] create list of number pairs
        - sort the pairs by `return_diff`
        - return the pair with the lowest sum
    
    - 

'''
def return_list_of_pairs(lst):
    pairs = []
    for first_idx in range(0, len(lst)):
        for second_idx in range(0, len(lst)):
            if first_idx != second_idx:
                pairs.append([lst[first_idx], lst[second_idx]])
    return pairs

#print(return_list_of_pairs([5, 25, 15, 11, 20]))

def return_diff(lst):
    diff = lst[0] - lst[1]
    return abs(diff)

def closest_numbers(lst):
    lst_of_pairs = return_list_of_pairs(lst)
    lst_of_pairs.sort(key=return_diff)
    #print(lst_of_pairs)
    result = tuple(lst_of_pairs[0])
    return result


print(closest_numbers([5, 25, 15, 11, 20]) == (15, 11))
print(closest_numbers([19, 25, 32, 4, 27, 16]) == (25, 27))
print(closest_numbers([12, 22, 7, 17]) == (12, 7))