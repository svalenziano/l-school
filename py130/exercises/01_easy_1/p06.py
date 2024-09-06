'''


Use reduce to concatenate a list of strings into a single string.
'''

from functools import reduce

lst = 'the quick brown fox jumps over the lazy dog'.split()
print(lst)

concatenated = reduce(lambda x, accum: x + ' ' + accum, lst)
print(concatenated)

