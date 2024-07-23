'''
P
    INPUT = string
    OUTPUT = alternated-case string.  
                Non-alpha chars don't count towards toggling but 
                they DO get returned in the string
E
D
A
    - use a for loop and a `capitalize` toggle variable (boolean) to iterate through the 
        string, appending each character to a result string
        - upper/lower only if the character `isalpha`

    v1 low level:
        - if char is alpha:
            - if make upper:
                - append uppercase
            - else:
                - append lowecase
            - toggle `make_upper`
        - else:
            -append lowercase

'''


def staggered_case(string):
    result = ''
    make_upper = True
    for char in string:
        if char.isalpha():
            if make_upper:
                result += char.upper()
            else:
                result += char.casefold()
            make_upper = not make_upper
        else:
            result += char
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