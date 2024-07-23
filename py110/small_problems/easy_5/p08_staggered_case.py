'''
P
    INPUT = string
    OUTPUT = string, first letter capitalized, every letter thereafter alternated
    REQS
        EX
            - Don't modify non-alpha chars but DO COUNT THEM
            - Do lowercase caps
            - Do uppercase lowercased chars
        IMP
            -
E
D
A
    - high level options
        - counter
        - comprehension

    - comprehension v1
        - casefold the entire string
        - comprehension
            - char.upper()
            - for idx, char in enumerate(string)
            - if idx % 2 == 0 (idx is even)
'''


def staggered_case(string):
    string = string.casefold()
    lst = [char.upper() if idx % 2 == 0 else char
            for idx, char in enumerate(string)]
    string = ''.join(lst)
    return string

def ls():
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

ls()