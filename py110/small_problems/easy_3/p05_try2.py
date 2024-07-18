
'''
Alg
    Convert to str
    Reverse
    Convert to int
'''

def reverse_number(num):
    reversed_characters = list(reversed(list(str(num))))
    return int(''.join(reversed_characters))

print(reverse_number(12345) == 54321)   # True
print(reverse_number(12213) == 31221)   # True
print(reverse_number(456) == 654)       # True
print(reverse_number(1) == 1)           # True
print(reverse_number(12000) == 21)      # True