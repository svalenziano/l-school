'''
Same as previous, except use a generator FUNCTION
'''
def capitalize(lst_of_strings):
    for string in strings:
        yield string.capitalize()

strings = ["hello", "world", "and", "all that"]

print(tuple(capitalize(strings)))