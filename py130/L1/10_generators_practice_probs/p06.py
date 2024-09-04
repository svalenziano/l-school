'''
Create a generator function that generates the capitalized version of every string in a list of strings whose length is less than 5. Use a single print invocation to print all the capitalized strings as a set.
'''

def capitalize_less_than_5(lst_of_strings):
    for string in lst_of_strings:
        if len(string) < 5:
            yield string.capitalize()

strings = ['four', 'score', 'and', 'seven', 'years', 'ago']

print(set(capitalize_less_than_5(strings)))