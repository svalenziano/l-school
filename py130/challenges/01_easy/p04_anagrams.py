'''
P
Write a program that takes a word and a list of possible anagrams and selects the correct sub-list that contains the anagrams of the word.

For example, given the word "listen" and a list of candidates like "enlists", "google", "inlets", and "banana", the program should return a list containing "inlets". Please read the test suite for the exact rules of anagrams.

    REQS
        EXP
        IMPL
            - each character in the original word can only be used once in the anagram
            - case insensitive
            - a word is NOT an anagram of itself
            - anagram = same length as original word
            - 
            `match`
                INPUT = list of words
                OUTPUT = list of anagrams (sublist of the input list)
                ALG:
                    - AVOID DUPS in input list: input list should be converted to set, each member lowercased.
                    - Return original string values... must retain association with original string casing

    QS

E
D
    class WORD (collaborator)
        state
            str original
            str lowercase
        behaviors
            __str__
    
    class Anagram
        state
            original_word (str)  
        behaviors
            match

A


'''

class Anagram:
    pass