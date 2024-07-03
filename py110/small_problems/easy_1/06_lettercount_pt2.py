'''
Problem
    - same as before, but only count alphabetic characters.  
        Don't count numeric, punctuation, etc

Data structure
    - List to hold processed words
    - Dict for return values

Algorithm
    - new list: split the string into words
    - for each word:
        - replace the word with a new word that contains only 'alnum' characters
    - create a new list of lengths
    - create a dict of lengths and counts

'''
def remove_non_letters(word):
    cleaned = ''
    for char in word:
        cleaned += char if char.isalnum() else ''
    return cleaned

def word_sizes(s):
    words_list = s.split()
    cleaned_words = []
    for word in words_list:
        cleaned_words.append(remove_non_letters(word))
    lengths = [len(word) for word in cleaned_words]
    length_dict = {length:lengths.count(length) for length in lengths}
    return length_dict



# All of these examples should print True

string = 'Four score and seven.'
print(word_sizes(string) == {4: 1, 5: 2, 3: 1})

string = 'Hey diddle diddle, the cat and the fiddle!'
print(word_sizes(string) == {3: 5, 6: 3})

string = 'Humpty Dumpty sat on a w@ll'
print(word_sizes(string) == {6: 2, 3: 2, 2: 1, 1: 1})

string = "What's up doc?"
print(word_sizes(string) == {5: 1, 2: 1, 3: 1})

print(word_sizes('') == {})