'''
P
    input = two integers
        - first = count
        - second = starting number of the sequence
    output = 
        - list with length equal to the `count` argument
        - value of each element should be a multiple of the starting number
E

D

A
    - starting number  = second argument
    - Init empty list: lst = []
    - Construct a range starting at 0, with the same number of elements as the integer `count`
    - For each number in that range, 
        - Multiply the range number by the starting number
        - append the result to `lst`
    - return `lst`

C

'''
def sequence(count, start):
    return [start + start * i for i in range(0, count)]


print(sequence(5, 1) == [1, 2, 3, 4, 5])          # True
print(sequence(4, -7) == [-7, -14, -21, -28])     # True
print(sequence(3, 0) == [0, 0, 0])                # True
print(sequence(0, 1000000) == [])                 # True