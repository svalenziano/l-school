'''
p
    INPUT - STR
    OUTPUT - String w/ alternating case.  Non-alpha chars don't count for toggling
        see examples below
e
d
a
    INIT empty str `result` = ''
    next_char_upper = True
    WHILE idx < len(string)
        if char is alphabetic:
            if next_char_upper:
                append char.upper() to `result`
            otherwise:
                append char.casefold() to `result`
            Toggle the value of `next_char_upper`
        idx += 1
'''

def staggered_case(str):
    result = ''
    next_char_upper = True
    idx = 0
    while idx < len(str):
        char = str[idx]
        if char.isalpha():
            if next_char_upper:
                result += char.upper()
            else:
                result += char.casefold()
            next_char_upper = not next_char_upper
        else:
            result += char
        idx += 1
    return result


string = 'I Love Launch School!'
result = "I lOvE lAuNcH sChOoL!"
print(staggered_case(string) == result)  # True

string = 'ALL_CAPS'
result = "AlL_cApS"
print(staggered_case(string) == result)  # True

string = 'ignore 77 the 4444 numbers'
result = "IgNoRe 77 ThE 4444 nUmBeRs"
print(staggered_case(string) == result)  # True

print(staggered_case('') == "")          # True