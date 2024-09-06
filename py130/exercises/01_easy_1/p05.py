'''


Remove all None values from a list using the filter method.
'''

lst = [42, 'hello', None, 'maybe', None, 'Its Friday 🥲']

cleaned = list(filter(lambda x: x != None, lst))

print(lst)
print(cleaned)