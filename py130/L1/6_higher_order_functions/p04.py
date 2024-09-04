'''
Use the reduce function shown in the answer to the previous question to compute the sum of the squares in a list of numbers.
'''

def reduce(callback, collection, start_value):
    accumulator = start_value
    for element in collection:
        accumulator = callback(element, accumulator)
    return accumulator


numbers = range(10)

# MY SOLUTION
square_accum = lambda number, accum: (number ** 2) + accum
sum_of_squares = reduce(square_accum, numbers, 0)

print('Reduce: ')
print(sum_of_squares)


# check the math with a comprehension
print('Check your math: ')
squares = {num:num ** 2 for num in numbers}
print(squares)
print(sum(squares.values()))