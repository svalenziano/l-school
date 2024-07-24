'''
RESULT = 🟢.  Easy, 9 minutes!

P
    input = string
    output = integer; count of digits that occur more than once
                ignore case
                alphanumeric only
E

D
    set?
A
    casefold the string
    Make a set using a comprehension
        Filter: count is greater than one
    Return the length of the set
'''

def distinct_multiples(string):
    string = string.casefold()
    dups = {char
            for char in string
            if string.count(char) > 1}
    return len(dups)


print(distinct_multiples('xyz') == 0)               # (none)
print(distinct_multiples('xxyypzzr') == 3)          # x, y, z
print(distinct_multiples('xXyYpzZr') == 3)          # x, y, z
print(distinct_multiples('unununium') == 2)         # u, n
print(distinct_multiples('multiplicity') == 3)      # l, t, i
print(distinct_multiples('7657') == 1)              # 7
print(distinct_multiples('3141592653589793') == 4)  # 3, 1, 5, 9
print(distinct_multiples('2718281828459045') == 5)  # 2, 1, 8, 4, 5