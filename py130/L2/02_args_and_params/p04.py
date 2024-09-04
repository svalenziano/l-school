'''
Write a function named calculate_average that any number of numeric arguments and returns their average. Make sure it returns None if no arguments are provided.
'''

def calculate_average(*args):
    if not args:
        return None
    average = sum(args) / len(args)
    return average

print(calculate_average(1, 2, 3))
print(calculate_average(0, 100))
print(calculate_average())