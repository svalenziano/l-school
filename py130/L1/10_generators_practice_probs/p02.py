'''
Create a generator function that generates the reciprocals of the numbers from 1 to n, where n is an argument to the function. Use a for loop to print each value.
'''

def reciprocals(max):
    for num in range(1, max + 1):
        yield 1 / num

for num in reciprocals(10):
    print(num)