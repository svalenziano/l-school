'''
RESULT = 🟢 easy peasy

P
    INPUT = string
    OUTPUT = boolean, is string a panagram?
    REQS
        - Pangram = string contains every letter of the alphabet at least once
E

D
    set of letters
A
    Create set of characters in string, 
        Filter: include 'isalpha' only
        Transform: casefold
    If the length of the set is 24, return True
'''

def is_pangram(string):
    CHARS_IN_ALPHABET = 26
    alpha_chars = {char.casefold()
                   for char in string
                   if char.isalpha()}
    #print(string); print(alpha_chars); print(len(alpha_chars))
    return len(alpha_chars) == CHARS_IN_ALPHABET


print(is_pangram('The quick, brown fox jumps over the lazy dog!') == True)
print(is_pangram('The slow, brown fox jumps over the lazy dog!') == False)
print(is_pangram("A wizard’s job is to vex chumps quickly in fog.") == True)
print(is_pangram("A wizard’s task is to vex chumps quickly in fog.") == False)
print(is_pangram("A wizard’s job is to vex chumps quickly in golf.") == True)

my_str = 'Sixty zippers were quickly picked from the woven jute bag.'
print(is_pangram(my_str) == True)