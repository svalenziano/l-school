'''
Use a generator expression to capitalize every string in a list of strings. Use a single print invocation to print all the capitalized strings as a tuple.
'''
from string import capwords
strings = ["hello", "world", "and", "all that"]
capitalized = (capwords(string) for string in strings)
print(tuple(capitalized))