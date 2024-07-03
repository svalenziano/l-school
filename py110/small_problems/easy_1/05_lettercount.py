'''
Problem
    - Input: string consisting of zero or more space separated words
    - Output: returns dict that shows the *number* of words w different sizes
    - BONUS POINTS: how can .setdefault make this easier (https://launchschool.com/lessons/1b66cd61/assignments/cf779435)
Examples
    - see test cases below

Data structure
    - Dict
        {4: 1, 5: 3, 6:3}
    - No intermediate structure?

Alg
    - split the string at each space
    - get the length of the string
    - update the dict by incrementing the count of the length key.
        - Add a key if necessary
    - return the dict

Code

'''

# this is v1, that I completely without any fancy dict methods
def word_sizes_v01(string):
    strings = string.split()
    counts = {}
    for substring in strings:
        length = len(substring)
        if length in counts:
            counts[length] += 1
        else:
            counts[length] = 1
    return counts


def word_sizes(s):
    words_list = s.split()
    counts = {}
    for word in words_list:
        length = len(word)
        counts.setdefault(length, 0)
        counts[length] += 1
    return counts



# All of these examples should print True

string = 'Four score and seven.'
print(word_sizes(string) == {4: 1, 5: 1, 3: 1, 6: 1})

string = 'Hey diddle diddle, the cat and the fiddle!'
print(word_sizes(string) == {3: 5, 6: 1, 7: 2})

string = 'Humpty Dumpty sat on a wall'
print(word_sizes(string) == {6: 2, 3: 1, 2: 1, 1: 1, 4: 1})

string = "What's up doc?"
print(word_sizes(string) == {6: 1, 2: 1, 4: 1})

print(word_sizes('') == {})