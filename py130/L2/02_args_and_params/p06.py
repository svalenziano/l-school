'''
Define a function named concat_strings that takes any number of strings and returns the concatenation of all the strings. Add a keyword-only argument sep with a default value of ' ' that specifies the separator to use between the strings.
'''

def concat_strings(*args, sep=' '):
    print(sep.join(args))

concat_strings('The', 'quick', 'brown', 'fox')
concat_strings('The', 'quick', 'brown', 'fox', sep=' ==> ')
concat_strings('The', 'quick', 'brown', 'fox', sep='')
concat_strings('The')
# concat_strings(['The', 'quick', 'brown', 'fox'], sep='')