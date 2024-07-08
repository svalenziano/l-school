'''
P
    - Input = positive integer
    - Output = number with it's digits reversed
E

D

A
    - Convert to string
    - Convert to list
    - Reverse
    - Join back into string
    - Convert to integer

C

'''
def reverse_number(pos_integer):
    return int(''.join(reversed(list(str(pos_integer)))))


print(reverse_number(12345) == 54321)   # True
print(reverse_number(12213) == 31221)   # True
print(reverse_number(456) == 654)       # True
print(reverse_number(1) == 1)           # True
print(reverse_number(12000) == 21)      # True