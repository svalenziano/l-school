SV_TEST_STRINGS = [
        '',
        'aaa',
        'aba',
        'aabbaa',
        'bbb',
        'pty',
        'bbbaaa',
        'aaasdf',
        'bxwrtaaaaxyza',
        'aewoijwavmwowoiefawaajj',
    ]

def string_of_consonants():
    '''
    This helper function simply returns a string of all the consonants 
    in the english language, including 'y'
    '''
    alphabet = set([chr(i) for i in range(ord('a'), ord('z') + 1)])
    consonants = alphabet.difference(set('aeiou'))
    return ''.join(sorted(list(consonants)))

def get_consonant_substrings(string):
    '''
    Returns: list of 'adjacent consonant' substrings, without spaces
    TODO: this function is longer than 15 lines but I'm not sure how to fix that?
        perhaps I should extract the 'if else' block?
    '''
    index = 0; substring = ''; result = []
    string = string.replace(' ', '')
    if string == '':
        return result

    while True:
        char = string[index]
        if is_consonant(char):
            substring += char
        elif len(substring) >= 2:
            result.append(substring)
            substring = ''
        else:
            substring = ''
        index += 1
        if index >= len(string):
            if substring:
                result.append(substring)
            return result

def is_consonant(character):
    '''
    Returns: is the character a consonant? True or False.
    '''
    if len(character) > 1:
        return 'Accepts one character only!'
    return character in 'bcdfghjklmnpqrstvwxyz'

def get_max_length(list_of_strings):
    '''
    Returns length of longest string
    '''
    lengths = [len(x) for x in list_of_strings]
    return max(lengths) if lengths else 0

def get_max_adjacent_consonants(string):
    return get_max_length(get_consonant_substrings(string))

def sort_by_consonant_count(list_of_strings):
    '''
    Returns a new list, sorted by length
    '''
    def second_element(x):
        return x[1]
    
    tuples = []
    for i in list_of_strings:
        tuples.append( (i, get_max_adjacent_consonants(i)) )
    tuples.sort(key = second_element, reverse= True)

    return [i[0] for i in tuples]


# ****************************************************************
# TESTS
# ****************************************************************


def test_string_consonants(tests):
    for i in tests:
        print(f"{i} ==> {get_consonant_substrings(i)}")
# test_string_consonants(TEST_STRINGS)

def test2():
    for i in SV_TEST_STRINGS:
        print(
    f'''\
    {i} ==> {get_consonant_substrings(i)} \
    ==> {get_max_adjacent_consonants(i)}\
    ''')
# test2()

def final_test():
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

final_test()