'''


Use map to create a list of lengths of each string in the original list.
'''


lst = 'the quick brown fox jumps over the lazy dog'.split()
print(lst)

lst_of_lengths = list(map(len, lst))
print(lst_of_lengths)