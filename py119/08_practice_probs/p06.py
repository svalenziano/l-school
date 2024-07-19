'''
RESULT = 🟡 Pretty good, though I had a little trouble with the correct algorithm

P
    INPUT = string
    OUTPUT = dict
                keys = lowercase letters in str
                values = how often the letter occurs in the str
    REQS
        EX
        IMPL
            - alphabetic chars only
            - Uppercase chars are ignored / excluded from counts
E
D
    - dict
A
    - SET: include only alphabetic lowercase
    - INIT empty dict `chars`
    - for char in set:
        - get count of char in string, and assign to dict key
    - return dict
C
'''

def count_letters(string):
    chars = {char for char in string
             if char.islower() and char.isalpha()}
    counts = {}
    for char in chars:
        counts[char] = string.count(char)
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