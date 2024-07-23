'''
RETURN: 🟡  Done in 13 mins, although this should have been much easier!  My v1
            algorithm failed bc I failed to identify the fact that my alg
            would fail if a character occured > 2 times


P
    IN = alphanumeric string
    OUT = count of distinct case-insenstive alphabetic characters and numeric digits
            that occur MORE THAN ONCE
E
    
    'xxyypzzr' = 3 ... length 8, set 'xypzr' length 5
    'xXyYpzZr'.casefold = 'ccyypzzr' ... length 8, set 'cypzr' length 5
D
    ?
A
    v1 - FAILED BC IT ONLY WORKS FOR DUPS THAT OCCUR TWICE.  IF A CHAR
        OCCURS 3X, THIS WILL FAIL
    casefold the string (ignore case)
    return length of string minus length of set

    v2
    - Use set comprehension to create set of chars whose count is greater than 1
C
'''

def distinct_multiples(string):
    string = string.casefold()
    dups =  {char
            for char in string
            if string.count(char) > 1}
    #print(string); print(dups)
    return len(dups) if dups else 0



print(distinct_multiples('xyz') == 0)               # (none)
print(distinct_multiples('xxyypzzr') == 3)          # x, y, z
print(distinct_multiples('xXyYpzZr') == 3)          # x, y, z
print(distinct_multiples('unununium') == 2)         # u, n
print(distinct_multiples('multiplicity') == 3)      # l, t, i
print(distinct_multiples('7657') == 1)              # 7
print(distinct_multiples('3141592653589793') == 4)  # 3, 1, 5, 9
print(distinct_multiples('2718281828459045') == 5)  # 2, 1, 8, 4, 5