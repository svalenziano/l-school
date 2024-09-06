'''


Remove all None values from a list using the filter method.
'''

lst = [None, 'hello world', None, 'Its Friday 🥲', 0, 0.000, [], {}]

cleaned = list(filter(lambda x: x != None, lst))

print(lst)
print(cleaned)