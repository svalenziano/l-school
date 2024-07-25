'''
RESULT = 🟡 Done in 17.5 mins
            Worked fine, although it's probably not an optimised way of accomplishing this!
            I **DO** need to figure out how to make my option 2 work!

P
    INPUT = list of strings
    OUTPUT = none
    RETURN = new list of strings, sorted based on 'highest qty of adjacent 
                consonants a string contains', descending order
    REQS
        EX
            - If tie: retain original order in relation to each other
            - 'adjacent' = ignore spaces btw words, ie 'p q' == adjacent
        IMPL
            - min number of adjacents = 2 (no such thing as one adjacent consonant)

    QS
E
    LS TESTS:
        my_list = ['aa', 'baa', 'ccaa', 'dddaa']
        print(sort_by_consonant_count(my_list))
        # ['dddaa', 'ccaa', 'aa', 'baa']

        my_list = ['can can', 'toucan', 'batman', 'salt pan']
        print(sort_by_consonant_count(my_list))
        # ['salt pan', 'can can', 'batman', 'toucan']

        my_list = ['bar', 'car', 'far', 'jar']
        print(sort_by_consonant_count(my_list))
        # ['bar', 'car', 'far', 'jar']

        my_list = ['day', 'week', 'month', 'year']
        print(sort_by_consonant_count(my_list))
        # ['month', 'day', 'week', 'year']

        my_list = ['xxxa', 'xxxx', 'xxxb']
        print(sort_by_consonant_count(my_list))
        # ['xxxx', 'xxxb', 'xxxa']
D
    list of strings
V
    'dddaa' > 3
    'ccaa'  > 2
    'aa'    > 0
    'baa'   > 0
A
    v1 high level
        - create new list
        - for each string
            - determine the max num of adjacent consonants within that string
                - REMEMBER: MIN ADJACENTS = 2.  1 IS NOT AN OPTION
        - sort the strings according to highest num, DESCENDING
        - return list

        v1 max_adjacent_in_str [helper]
        - INPUT =STRING
        - RETURN = MAX ADJACENT
        - create list of all substrings using comprehension
            - Filter: consists only of consonants
        - create list of lengths (lengths of substrings)
        - return max length

        v1 all_consonants(str) [helper]
        - INPUT = string
        - OUTPUT = boolean
        - for char in str
            - if char isn't a consonant
                - return False
        - return True



        'bbaab'
        'bb'

'''

def all_consonants(string):
    for char in string:
        if char in 'aeiou':
            return False
    return True

def max_adjacent_consonants(string):
    substrings = [string[start_idx: end_idx]
                  for start_idx in range(len(string))
                  for end_idx in range(start_idx + 1, len(string) + 1)]
    adjacent = [substr
                for substr in substrings
                if all_consonants(substr) and len(substr) > 1]
    lengths = [len(substr)
                for substr in adjacent]
    #print(string); print(adjacent)
    return max(lengths) if lengths else 0

def sort_by_consonant_count(lst):
    sorted_by_count = sorted(lst, key=max_adjacent_consonants, reverse=True)
    return sorted_by_count


tests = [
    'abcdddd',
    'a',
    'ccaa',
]

for t in tests:
    pass
    #print(max_adjacent_consonants(t))

#print(all_consonants('bbbaccc'))


def ls():
    my_list = ['aa', 'baa', 'ccaa', 'dddaa']
    print(sort_by_consonant_count(my_list))
    # ['dddaa', 'ccaa', 'aa', 'baa']

    my_list = ['can can', 'toucan', 'batman', 'salt pan']
    print(sort_by_consonant_count(my_list))
    # ['salt pan', 'can can', 'batman', 'toucan']

    my_list = ['bar', 'car', 'far', 'jar']
    print(sort_by_consonant_count(my_list))
    # ['bar', 'car', 'far', 'jar']

    my_list = ['day', 'week', 'month', 'year']
    print(sort_by_consonant_count(my_list))
    # ['month', 'day', 'week', 'year']

    my_list = ['xxxa', 'xxxx', 'xxxb']
    print(sort_by_consonant_count(my_list))
    # ['xxxx', 'xxxb', 'xxxa']

ls()