'''
RESULT: 🟡 ~25 mins.
            I intentionally made this harder for myself by working with strings
            instead of a list, with the intention of practicing string operations.
            I was successful, though I do think it slowed me down.

P
    INPUT = 'non-empty string, 100% lowercase alphabetic chars'
    OUTPUT = length of the longest vowel substring (aeiou, not y)
E
D
    Just a count? 
    List?
A
    `result` = []
    For each character
        If the char is a vowel
            Add the vowel substring to `result`
            Find the substring (get starting index and length)
            Remove the substring (reassign)
        Repeat while the string still has vowels

    `return_vowel_substring` [HELPER]
    INPUT = string, start index
    OUTPUT = vowel substring
    Alg
        idx = start idx
        result = ''
        while char in vowels and idx < len(string)
            add char to result
            increment index
        return result

'''
VOWELS = 'aeiou'


def return_vowel_substring(string, vowel_idx):
    idx = vowel_idx  # rename the var for readability within function
    result = ''
    while idx < len(string) and string[idx] in VOWELS:
        char = string[idx]
        result += char
        idx += 1
    return result if result else None

def longest_vowel_substring(string):
    
    result = []
    idx = 0
    while idx < len(string):
        char = string[idx]
        if char in VOWELS:
            substring = (return_vowel_substring(string, idx))
            result.append(substring)
            string = string[:idx] + string[idx + len(substring):]
        idx += 1
    lengths = [len(substr) for substr in result]
    return max(lengths) if lengths else 0

print(return_vowel_substring('foofoo', 3))


def ls_tests():
    print(longest_vowel_substring('cwm') == 0)
    print(longest_vowel_substring('many') == 1)
    print(longest_vowel_substring('launchschoolstudents') == 2)
    print(longest_vowel_substring('eau') == 3)
    print(longest_vowel_substring('beauteous') == 3)
    print(longest_vowel_substring('sequoia') == 4)
    print(longest_vowel_substring('miaoued') == 5)
ls_tests()