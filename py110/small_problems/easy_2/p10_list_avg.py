'''
P
    - Input = non-empty list of positive integers
    - Output = avg of all ints in the list, rounded down to nearest whole number

E

D

A
    - Average integers
    - Round DOWN to nearest whole number.  Use floor division w/ divisor = '1'
    - 
C
'''

# oops, I forgot how an average works 😅
def product(list_of_ints):
    prod = 1
    for int_ in list_of_ints:
        prod *= int_
    return prod

def average(list_of_ints):
    avg = sum(list_of_ints) // len(list_of_ints)
    # print(avg)
    return avg


print(average([1, 5, 87, 45, 8, 8]) == 25)        # True
print(average([9, 47, 23, 95, 16, 52]) == 40)     # True
print(average([7]) == 7)                          # True