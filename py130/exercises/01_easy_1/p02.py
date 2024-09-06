'''


Obtain only the even numbers from a list using the filter function.
'''


orig = list(range(10))

new = list(filter(lambda num: num % 2 == 0, orig))

print(orig)
print(new)