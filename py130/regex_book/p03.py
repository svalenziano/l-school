# SV CODE
import re

def mystery_math(string):
    return re.sub(r'[\/\-\+\*]', '?', string, count=1)

def mystery_math(string):
    return re.sub(r'''
                  [
                  \/
                  \-
                  \+
                  \*
                  ]
                  ''', '?', string, count=0, flags=re.VERBOSE)


# LS TESTS
print(mystery_math('4 + 3 - 5 = 2'))
# '4 ? 3 - 5 = 2'

print(mystery_math('(4 * 3 + 2) / 7 - 1 = 1'))
# '(4 ? 3 + 2) / 7 - 1 = 1'