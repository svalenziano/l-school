'''
P
    INPUT = list of integers
    OUTPUT = sorted list of integers
    REQS
        EX
            mutate the list
            use the 'bubble sort' method of iterative swapping
        IMP
E
D
    ?
A
    - Create a range of `ending indices` between 0 and the end of the `parent_list`, 
        non-inclusive.  For example:
        list: [1, 2, 3] ==> indices: [1, 2]
    - For each ending index:
        - Create a list of sublist indices: [[0, 1], [1,2]]
    - INIT var `is_sorted` = None  (None means TBD in this case)
        to track whether list has been verified as sorted or not
    - While `is_sorted` equals None or False
        - Reset `is_sorted` to None
        - For each set of sublist indices
            - Create a sublist
            - If the sublist isn't sorted
                - swap the elements
                - Reassign `is_sorted` to False
            - re-create the `parent_list` using slicing
        - If `is_sorted` still equals None, reassign to True
    - Return list
C
'''

def prompt(x):
    print(f"==> {x}")

'''
I wrote this version prior to looking at LS's solution.  It's way more complicated
than it needs to be 😭.  See above for algorithm / pseudocode.
'''
def bubble_sort_v1(lst):
    end_indices = range(1, len(lst))
    sublist_indices = [(idx - 1, idx) for idx in end_indices]
    is_sorted = None
    while not is_sorted:
        is_sorted = None
        for idx1, idx2 in sublist_indices:
            sublist = lst[idx1: idx2 + 1]
            # if un-sorted
            if sublist[0] > sublist[1]:
                sublist.reverse()
                is_sorted = False
            # recreate parent list
            reordered = lst[:idx1] + sublist + lst[idx2 + 1:]
            lst.clear()
            lst.extend(reordered)
        if is_sorted == None:
            is_sorted = True


'''
I wrote this solution after looking at LS's solution

ALG:
    - while True
        - for idx in list (starting at one... range(1, len(lst))
            - determine if the element at idx is greater than the element preceding it
                - if it is ... continue
            - re-create the list with the elements swapped
            - `swap_ocurred` = True
        - if not swap_ocurred:
            - break

'''










lst1 = [5, 3]
bubble_sort(lst1)
print(lst1 == [3, 5])                   # True

lst2 = [6, 2, 7, 1, 4]
bubble_sort(lst2)
print(lst2 == [1, 2, 4, 6, 7])          # True

lst3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel',
        'Kim', 'Bonnie']
bubble_sort(lst3)

expected = ["Alice", "Bonnie", "Kim", "Pete",
            "Rachel", "Sue", "Tyler"]
print(lst3 == expected)                 # True