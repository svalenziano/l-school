'''


Create a generator function that yields numbers from 1 to 5.
'''

def yield_numbers():
    for num in range(1, 5+1):
        yield num

for num in yield_numbers():
    print(num)