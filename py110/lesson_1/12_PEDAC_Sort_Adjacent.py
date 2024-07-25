'''
RESULT = 🟢 Done in 20 mins
            Taking time to work through the algorithm and run mock 'tests' was super helpful
            It allowed me to really think about the logic without being confused re: what the heck
                Python was doing.
            I refined my logic (within the algorithm) a couple of times, where I was able to recognize redundancy / logic flaws
            

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
        - strip spaces from string using `.replace()`
        - count = 1
        - max_count = 0
        - for each character in string (except for last char):
            - if character is consonant
                - if next char is also a consonant
                    - increment count
            - else:
                - update max_count
                - reset count to 1
            - if next char is the last char
                - update max_count
                - return max_count

        'bbaab'
        'bb'

'''

def is_consonant(character):
    if character not in 'aeiou':
        return True
    return False

def max_adjacent_consonants(string):
    string = string.replace(' ', '')
    max_count = 0
    count = 1
    for idx, char in enumerate(string):
        next_char = string[idx + 1]
        if is_consonant(char) and is_consonant(next_char):
            count += 1
        else:
            max_count = max([count, max_count])
            count = 1
        final_index = len(string) - 1
        next_index = idx + 1
        if next_index == final_index:
            max_count = max([count, max_count])
            return max_count if max_count > 1 else 0


def sort_by_consonant_count(lst):
    sorted_by_count = sorted(lst, key=max_adjacent_consonants, reverse=True)
    return sorted_by_count


# tests = [
#     'abcdddd',
#     'aa',
#     'ccaa',
#     'cccaazzzzz',
# ]
# 
# for t in tests:
#     print(t)
#     print(max_adjacent_consonants(t))

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