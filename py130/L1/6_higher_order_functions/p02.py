'''
Write a reject function that mimics the select function you just wrote, but that rejects rather than selects elements from the iterable object. That is, it should return a list of all the elements of the iterable for which the callback function doesn't return a truthy value. It should only include any elements for which the callback returns a falsy value.

You may use comprehensions if you wish.

You can use the following examples to test your code:
'''





numbers = [1, 2, 3, 4, 5]
colors = {'red', 'orange', 'yellow', 'green',
          'blue', 'indigo', 'violet'}

even_numbers = reject(lambda number: number % 2 != 0, numbers)
print(even_numbers)            # [2, 4]

small_numbers = reject(lambda number: number >= 10, numbers)
print(small_numbers)          # [1, 2, 3, 4, 5]

large_numbers = reject(lambda number: number < 10, numbers)
print(large_numbers)          # []

long_color_names = reject(lambda color: len(color) <= 5, colors)
print(long_color_names)
# ['yellow', 'violet', 'orange', 'indigo']
# The order of the colors may vary, but should include the
# indicated colors.