'''
RESULT = 🟢 8 mins, Easy with comprehensions!


P
    INPUT = string
    OUTPUT = dict:
                    keys = lowercase letters
                    values = count of the letter in the orig string
    REQS
        EX
        IMPL
            If it's not a lowercase letter, omit it!
E
D
    cleaned string
    dict
A
    v1 high level
    - Create set of characters from the orig string that are 1) alphabetical and 2) lowercase
    - Create a dictionary whose keys are from the set, and whose values are 
            counts from the original string
'''

def count_letters(string):
    chars = {char
             for char in string
             if char.isalpha() and char.islower()}
    counts = {char: string.count(char)
              for char in chars}
    return counts



expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1}
print(count_letters('woebegone') == expected)

expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
            'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2}
print(count_letters('lowercase/uppercase') == expected)

expected = {'u': 1, 'o': 1, 'i': 1, 's': 1}
print(count_letters('W. E. B. Du Bois') == expected)

print(count_letters('x') == {'x': 1})
print(count_letters('') == {})
print(count_letters('!!!') == {})