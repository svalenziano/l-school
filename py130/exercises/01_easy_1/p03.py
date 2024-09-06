'''


Calculate the product of all numbers in a list using the reduce function.
'''

from functools import reduce

orig = list(range(1, 10))

reduced = reduce(lambda num, accum: num * accum, orig)

print(orig)
print(reduced)