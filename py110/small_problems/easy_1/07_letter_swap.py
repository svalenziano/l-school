'''
Problem
    - input: string of 1 or more words
    - output: string, each word is modified so that first and last ltters are swapped
    - reqs
        -ex
        -imp: 
            - if word is a single letter, return the word without changing it
            - no empty strings
            - only a single space

Examples, tests


Data struct
- list to hold words for processing
- list to hold letters for processing


Alg
- split text into list of words
- for each word:
    - create new word-as-a-list (first and last swapped).
- re-combine those letters into words
- re-combine words into sentence / string
- return string

Code
'''
def swap(string):
    new_words = []
    for word in string.split():
        weird_word = list(word)
        weird_word[0] = word[-1]
        weird_word[-1] = word[0]
        new_words.append(''.join(weird_word))
    return ' '.join(new_words)




print(swap('Oh what a wonderful day it is')
      == "hO thaw a londerfuw yad ti si")  # True
print(swap('Abcde') == "ebcdA")            # True
print(swap('a') == "a")                    # True