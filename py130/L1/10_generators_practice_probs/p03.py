'''
Use a generator expression to capitalize every string in a list of strings. Use a single print invocation to print all the capitalized strings as a tuple.
'''

lst = 'the quick brown fox jumps'.split()
print(lst)

print(tuple(word.capitalize() for word in lst))