'''
P
E
D
A
    - remove_vowels()   [HELPER]
        - use a comprehension to create a list of letters if they are constonants (casefold)
        - return that list, joined into a string
    - [MAIN FUNCTION]
        - create a new list
        - for string item in the list:
            - create a new string
            - append it to the new list
        - return the new list
C
'''
def remove_vowels_from_string(string):
    VOWELS = ['a', 'e', 'i', 'o', 'u']
    return ''.join([char for char in string if char.casefold() not in VOWELS])

def remove_vowels(list_of_strings):
    result = []
    for string in list_of_strings:
        result.append(remove_vowels_from_string(string))
    return result


# All of these examples should print True
original = ['abcdefghijklmnopqrstuvwxyz']
expected = ['bcdfghjklmnpqrstvwxyz']
print(remove_vowels(original) == expected)        # True

original = ['green', 'YELLOW', 'black', 'white']
expected = ['grn', 'YLLW', 'blck', 'wht']
print(remove_vowels(original) == expected)        # True

original = ['ABC', 'AEIOU', 'XYZ']
expected = ['BC', '', 'XYZ']
print(remove_vowels(original) == expected)        # True