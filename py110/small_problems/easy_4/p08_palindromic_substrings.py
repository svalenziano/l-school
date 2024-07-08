'''
P
    INPUT = string
    OUTPUT = list of all palindromic substrings
    Reqs:
        Ex:
            - Single chars are not palindromes



E
D
A
    - Get all substrings
    - Filter for strings are are the same frontwards and backwards (use comprehension)
C
'''

import p07_all_substrings

def palindromes(string):
    x = [substr for substr in p07_all_substrings.substrings(string)
            if (substr == substr[::-1] and len(substr) > 1)
        ]
    return x



print(palindromes('abcd') == [])                  # True
print(palindromes('madam') == ['madam', 'ada'])   # True

print(palindromes('hello-madam-did-madam-goodbye') ==
                  [
                      'll', '-madam-', '-madam-did-madam-',
                      'madam', 'madam-did-madam', 'ada',
                      'adam-did-mada', 'dam-did-mad',
                      'am-did-ma', 'm-did-m', '-did-',
                      'did', '-madam-', 'madam', 'ada', 'oo',
                  ])    # True

print(palindromes('knitting cassettes') ==
                  [
                      'nittin', 'itti', 'tt', 'ss',
                      'settes', 'ette', 'tt',
                  ])    # True