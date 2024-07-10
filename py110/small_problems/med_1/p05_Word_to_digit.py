'''
P
    - INPUT = string
    - OUTPUT = string, all spelled-out-numbers replaced with digits
E
D
A
    - create dict of words/digits (constant)
    - split string into list (split at spaces, standard behavior)
    - for word in enumerate
        - if the word (casefold) is in the dict, replace it with the digit
    - convert the list back into string
    - return string
C
'''

DIGITS = {
# indices serve as stand-in for digit
    'zero' : '0',
    'one' : '1',
    'two' : '2',
    'three' : '3',
    'four' : '4',
    'five' : '5',
    'six' : '6',
    'seven' : '7',
    'eight' : '8',
    'nine' : '9',
}

def word_to_digit(string):
    list_of_words = string.split()
    return ' '.join(DIGITS.get(word, word) for word in list_of_words)
    


# LS test
message = 'Please call me at five five five one two three four'
print(word_to_digit(message) == "Please call me at 5 5 5 1 2 3 4")
# Should print True