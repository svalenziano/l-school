'''
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
        - remove spaces from string using `.replace()`
        - if length is less than 2, 
            return 0
        - count = 1
        - max count = 0
        - for each prev_char (exclude last char, to prevent index error)
            - if both current and prev_char are consonants
                - increment `count` by 1
            - if idx = last character in string:
                - reassign max count = max(count, max_count)
                - return ,max_count
            - else
                - reassign max count = max(count, max_count)
                - reset count to one


        'bbaab'
        'bb'

'''

def max_adjacent_in_str(string):
    consonants = 'bcdfghjklmnpqrstvwxyz'
    string = string.replace(' ', '')
    if len(string) < 2:
        return 0
    max_count = 0
    count = 1
    for idx in range(1, len(string)):
        prev_char = string[idx - 1]
        current_char = string[idx]
        if prev_char in consonants and current_char in consonants:
            count += 1
        elif count > 1:
            max_count = max((max_count, count))
        else:
            count = 1

    return max_count

print(max_adjacent_in_str('bbaabbb'))





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