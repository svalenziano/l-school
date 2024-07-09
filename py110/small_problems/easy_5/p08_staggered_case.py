'''
P
    - INPUT = string of 0 or more chars
    - OUTPUT = string with characters that alternate case: UPPER-lower-UPPER-...
E
D
A
    - INIT empty string
    - for each character
        - if index is even, append uppercase
        - else, append casefold (lowercase)
    - return string
C
'''


def staggered_case(string):
    result = ''
    for idx, char in enumerate(string):
        if idx % 2 == 0:
            result += char.upper()
        else:
            result += char.casefold()
    return result



string = 'I Love Launch School!'
result = "I LoVe lAuNcH ScHoOl!"
print(staggered_case(string) == result)  # True

string = 'ALL_CAPS'
result = "AlL_CaPs"
print(staggered_case(string) == result)  # True

string = 'ignore 77 the 4444 numbers'
result = "IgNoRe 77 ThE 4444 nUmBeRs"
print(staggered_case(string) == result)  # True

print(staggered_case('') == "")          # True