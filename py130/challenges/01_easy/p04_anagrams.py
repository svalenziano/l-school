'''
P
Write a program that takes a word and a list of possible anagrams and selects the correct sub-list that contains the anagrams of the word.

For example, given the word "listen" and a list of candidates like "enlists", "google", "inlets", and "banana", the program should return a list containing "inlets". Please read the test suite for the exact rules of anagrams.
'''

class Word:
    def __init__(self, word:str):
        self._original = word
    
    @property
    def original_case(self):
        return self._original

    @property
    def lowercase(self):
        return self._original.lower()
    
    @property
    def sorted_letters(self):
        letters = sorted(list(self.lowercase))
        return ''.join(letters)

class Anagram:
    def __init__(self, word:str):
        self._word = Word(word)

    def match(self, list_of_words):
        list_of_words = [Word(word) for word in list_of_words]
        return [word.original_case
                for word in list_of_words
                if word.lowercase != self._word.lowercase and
                word.sorted_letters == self._word.sorted_letters]