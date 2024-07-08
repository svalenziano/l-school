'''
P
    Input = integer
    Output  list of integers btw `1` and the argument, inclusive

E

D

A

C

'''


def sequence(max):
    seq = []
    current = 1
    while current <= max:
        seq.append(current)
        current += 1
    return seq



print(sequence(5) == [1, 2, 3, 4, 5])   # True
print(sequence(3) == [1, 2, 3])         # True
print(sequence(1) == [1])               # True