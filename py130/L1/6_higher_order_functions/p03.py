'''

Implement 'reduce'
'''

numbers = [10, 3, 5]
product = lambda number, accum: accum * number
print(reduce(product, numbers, 2))     # 300