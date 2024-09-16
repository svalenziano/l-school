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
    v1 high level
        - 

'''

class Word:
    def __init__(self, word:str):
        self._original = word
        self._lowercase = word.lower()

    def __str__(self):
        return self._original
    
    @property
    def original_case(self):
        return str(self)

    @property
    def lowercase(self):
        return self._lowercase
    
    @property
    def sorted_letters(self):
        letters = sorted(list(self.lowercase))
        return ''.join(letters)


class Anagram:
    def __init__(self, word:str):
        self._word = Word(word)

    def match(self, list_of_words):
        '''
        ALGO
        v1 high level
            INPUT = list of strings
            OUTPUT = list of anagram strings
        - create a list of Word objects, from the list of input strings
        - create a new list:
            - filter for words that aren't identical to the original (compare lowercase)
            - filter for words that dont have the same `sorted_letters` property
        - You should now have a list of anagram `Word` objects
        - Convert the list of `Word` objs back into a list of string objects using the original string (original case, original order)
        - return list

        ALGO TESTING
        [Word1, Word2, Word3, ...]
        [Word1]
        '''
        list_of_words = [Word(word) for word in list_of_words]
        return [word.original_case
                for word in list_of_words
                if word.lowercase != self._word.lowercase and
                word.sorted_letters == self._word.sorted_letters]

    