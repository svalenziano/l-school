'''
P
    INPUT: two lists
    OUTPUT: nested dict
            for each letter in `target_letters`,
            test if present, and count the integers
    REQS
        EX: 
        IMPL: 
E
D
A
    v1
    - use comprehension to build dict:
        keys = letters from `target_letters`
        values = 

    v2
    - Create a dictionary using a comprehension
        - key = each letter from `target_letters`
        - value = empty dict
        - for letter in target_letters
        - filter = none
    - For each character in the dictionary
        - create a `present` key w/ boolean value
        - 
'''

target_letters = ['a', 'b', 'c', 'd', 'e']
characters = ['a', 'b', 'b', 'd', 'f', 'f', 'z', 'z', 'z']

# ???

{
 'a': { 'present': True, 'count': 1 },
 'b': { 'present': True, 'count': 2 },
 'c': { 'present': False, 'count': 0 },
 'd': { 'present': True, 'count': 1 },
 'e': { 'present': False, 'count': 0 },
}