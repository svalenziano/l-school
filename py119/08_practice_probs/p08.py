'''
RESULT = 🟢 done in 10 mins.  Not the cleanest code, but it works fine
P
    input = non-empty lowercase alphabetic string
    output = integer; length of longest vowel substring
    reqs
        ex
            VOWELS = 'aeiou'
        impl
E

D
    integers, two counts = max and current 
A
    v1
        Iterate through string
        If a vowel substring is found, get the length
        If the length is greater than the max length, update the max length
        Return the max length

    v2
        For 
'''
VOWELS = 'aeiou'

def longest_vowel_substring(string):
    length = 0
    max_length = 0
    for char in string:
        if char in VOWELS:
            length += 1
        else:
            if length > max_length:
                max_length = length
            length = 0
    if length > max_length:
        max_length = length
    return max_length


print(longest_vowel_substring('cwm') == 0)
print(longest_vowel_substring('many') == 1)
print(longest_vowel_substring('launchschoolstudents') == 2)
print(longest_vowel_substring('eau') == 3)
print(longest_vowel_substring('beauteous') == 3)
print(longest_vowel_substring('sequoia') == 4)
print(longest_vowel_substring('miaoued') == 5)
