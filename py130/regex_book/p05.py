# SV CODE
import re

# This works!
def danish(string):
    return re.sub(r'\b(apple|blueberry|cherry)\b', 'danish', string, count=1)

# This does NOT work
# def danish(string):
#     return re.sub(r'\b(apple|cherry|blueberry){1}', 'danish', string)





# LS TESTS
print(danish('An apple a day keeps the doctor away'))
# -> 'An danish a day keeps the doctor away'

print(danish('My favorite is blueberry pie'))
# -> 'My favorite is danish pie'

print(danish('The cherry of my eye'))
# -> 'The danish of my eye'

print(danish('apple. cherry. blueberry.'))
# -> 'danish. cherry. blueberry.'

print(danish('I love pineapple'))
# -> 'I love pineapple'