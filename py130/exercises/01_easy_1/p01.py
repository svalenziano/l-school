'''
Create a list where each number from the original list is squared using the map method.
'''



orig = list(range(10))

new = list(map(lambda num: num**2, orig))

print(orig)
print(new)