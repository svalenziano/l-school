'''
See [[Python, Reduce]] note

Implement 'reduce'
'''

def reduce(callback, collection, start):
    accumulator = start
    idx = 0
    while idx < len(collection):
        element = collection[idx]
        accumulator = callback(element, accumulator)
        idx += 1
    return accumulator


numbers = (1, 2, 4, 8, 16)
total = lambda number, accum: accum + number
print(reduce(total, numbers, 0))        # 31

numbers = [10, 3, 5]
product = lambda number, accum: accum * number
print(reduce(product, numbers, 2))      # 300

colors = ['red', 'orange', 'yellow', 'green',
          'blue', 'indigo', 'violet']
rainbow = lambda color, accum: accum + color[0].upper()
print(reduce(rainbow, colors, ''))      # ROYGBIV

