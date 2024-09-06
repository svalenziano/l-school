'''


Calculate the product of all numbers in a list using the reduce function.
'''

from functools import reduce

def mult(num, accum):
    return num * accum

orig = list(range(1, 10))

reduced = reduce(mult, orig)

print(orig)
print(reduced)