'''
Create a generator expression that generates the reciprocals of the numbers from 1 to 10. A reciprocal of a number n is 1 / n. Use a for loop to print each value.
'''

reciprocals = (1 / num for num in range(1, 11))
for num in reciprocals:
    print(num)