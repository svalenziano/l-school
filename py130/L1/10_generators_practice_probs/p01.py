'''
Create a generator expression that generates the reciprocals of the numbers from 1 to 10. A reciprocal of a number n is 1 / n. Use a for loop to print each value.
'''

nums = range(1, 11)

for reciprocal in (1 / n for n in nums):
    print(reciprocal)