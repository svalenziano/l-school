''''
P
    - Input: list
    - Output: nested lists.  1) first half  2) second half
    - Reqs:
        - Explicit:
            - If odd number of elements, first list should be longer
E
D
A
    - Find midpoint of list and round up.  Use divmod and add both of the return values
    - Use string slicing to return the two lists
C

'''

def halvsies(lst):
    floor, remainder = divmod(len(lst), 2)
    midpoint = floor + remainder
    return [lst[:midpoint], lst[midpoint:]]


def ls_tests():
    # All of these examples should print True
    print(halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]])
    print(halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]])
    print(halvsies([5]) == [[5], []])
    print(halvsies([]) == [[], []])

def my_tests():
    tests = [
        [1,2,3,4],
        [1, 5, 2, 4, 3],
        [5],
        [],
    ]
    for i in tests:
        print(halvsies(i))

ls_tests()
#my_tests()