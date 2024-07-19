'''
https://launchschool.com/exercises/97414944

BINARY SEARCH

P
    - INPUT = 
        1) `lst` LIST.  Always sorted
        2) `search` Object to search for.
    - OUTPUT = Index if found, -1 if not found
    - Reqs:
        Ex
            - Use 'binary search` algorithm
        Imp
            - Is a list of primitives and NOT a list of collections (?)

E
D
A
    HIGH LEVEL v1
        - If length == 1 and the element doesn't equal `search`:
            return -1
        - If middle element is equal to `search`
            return element
        - If element > midpoint:
            return `binary_search(top half of `lst`)`
        - return `binary search` of bottom half of `lst`
        RESULT: uh oh, doesn't return the index

    HIGH LEVEL v2
    - Same as v1, except make a list of tuples consisting of (orig element, orig index)
        - If length of 
        - If length == 1 and the element doesn't equal `search`:
            return -1
        - If middle element is equal to `search`
            original idx of middle element
        - If element > midpoint:
            return `binary_search(top half of `lst`)`
        - return `binary search` of bottom half of `lst`
        THE RECURSIVE DIRECTION IS FEELING LIKE A DEAD END...

    HIGH LEVEL v2
    ex: [1,2,3,4]
    - discarded_length = 0
    - While True:
        - if length == 1 and element doesn't equal search, return -1
        - If middle element is equal to search, return index of middle element
            PLUS `discareded_length`
        - If element > midpoint:
            lst = top half of lst ex: [1,2]
            discarded_length += midpoint (minus one?) ex: 2
        - else:
            lst = bottom half of lst

C
'''



'''
*****************************************************************************
MY SOLUTION
My solution works, but it doesn't conform to the requirement 
    of discarding the lower half INCLUDING the middle value 😩.
    Modifying the code to discard the middle value will result in some errors 
    (silent errors, no exceptions.)  I believe they are caused by lsits with odd lengths.
*****************************************************************************
'''
def binary_search(lst, search):
    discarded = 0
    while True:
        if len(lst) == 1 and lst[0] != search:
            return -1
        midpoint = len(lst) // 2
        if lst[midpoint] == search:
            return midpoint + discarded
        if search > lst[midpoint]:
            lst = lst[midpoint:]  # discard bottom half (keeps middle value)
            discarded += midpoint
        else:
            lst = lst[:midpoint]  # discard top half





'''
*****************************************************************************
LS TESTS
*****************************************************************************
'''
# All of these examples should print True
businesses = ['Apple Store', 'Bags Galore', 'Bike Store',
              'Donuts R Us', 'Eat a Lot', 'Good Food',
              'Pasta Place', 'Pizzeria', 'Tiki Lounge',
              'Zooper']
print(binary_search(businesses, 'Pizzeria') == 7)
print(binary_search(businesses, 'Apple Store') == 0)

print(binary_search([1, 5, 7, 11, 23, 65, 89, 102], 77) == -1)
print(binary_search([1, 5, 7, 11, 23, 65, 89, 102], 89) == 6)
print(binary_search([1, 5, 7, 11, 23, 65, 89, 102], 5) == 1)

names = ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue',
         'Tyler']
print(binary_search(names, 'Peter') == -1)
print(binary_search(names, 'Tyler') == 6)