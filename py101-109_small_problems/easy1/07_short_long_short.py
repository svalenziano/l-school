def get_valid_numbers(message):
    '''
    Input accepts space-delimited string
    Output, list of integers (as strings)
    '''
    valid_return = None
    while valid_return == None:
        my_input = input(message) or '    totallyradibomzical steven 02938 234  '
        my_strings = my_input.strip().split(' ')
        valid_return = True
    return my_strings


# *****************************************************************************
# FUNCTIONS IN THIS BLOCK ARE WIP (SHOW YOUR WORK)

def sort_by_length_v0():
    '''
    Input: list of strings
    Computation: sort the list
    '''
    
    # create dict from strings, with length as value

    # create list from values

    # sort values, lowest to highest

    # create list of keys from that list of values

    # CREATE LIST OF SHORTEST STRINGS
    # while i < 'words_desired' each element in list of values, 
        # add key to new list

    pass

def sort_by_length_v1():
    # create matrix
    '''
    index, length
    0, 5
    1, 8
    2, 12
    '''
    pass

# *****************************************************************************

def truncate_list(list_of_strings, desired_length):
    '''
    Input: list of strings
    Processing: truncate to 2 items and sort by length, ascending
    '''
    # truncate to 2 items
    length = len(list_of_strings)
    elements_to_remove = length - desired_length
    i = 0
    while i < elements_to_remove:
        list_of_strings.pop(-1)
        i += 1

def sort_by_length(list_of_strings):
    '''
    Input: list of 2 (and exactly two) strings
    '''
    # Only works with 2 strings yo!
    truncate_list(list_of_strings, 2)

    # test length of both strings
    str0_length = len(list_of_strings[0])
    str1_length = len(list_of_strings[1])

    # if length of 2nd string is shorter, reverse the list
    if str1_length < str0_length:
        list_of_strings.reverse()

def short_long_short(string1, string2):
    list_of_strings = [string1, string2]
    sort_by_length(list_of_strings)
    return list_of_strings[0] + list_of_strings[1] + list_of_strings[0]

def main():
    '''
    strings = get_valid_numbers(
        "Gimme some strings, separated by spaces, plz.  ")
    print(repr(strings))
    sort_by_length(strings)
    '''

    # These examples should all print True
    print(short_long_short('abc', 'defgh') == "abcdefghabc")
    print(short_long_short('abcde', 'fgh') == "fghabcdefgh")
    print(short_long_short('', 'xyz') == "xyz")


if __name__ == '__main__':
    main()