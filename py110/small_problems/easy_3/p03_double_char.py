'''
P
    - Input - string
    - Output - string with two of every character

E

D

A

C

'''

def repeater(string):
    return ''.join([char * 2 for char in string])

print(repeater('Hello') == "HHeelllloo")              # True
print(repeater('Good job!') == "GGoooodd  jjoobb!!")  # True
print(repeater('') == "")                             # True