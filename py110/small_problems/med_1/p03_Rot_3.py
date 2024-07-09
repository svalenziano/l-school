'''
P
    INPUT: integer
    OUTPUT: 'maximum rotation' of input integer
E
D
A
    LEVEL 1
    - Starting at the leftmost digit and proceeding to the right:
        - Rotate
        - Update the number that is being rotated
        - Repeat until you've rotated the rightmost two digits
    LEVEL 2:
    - 
C
'''

def max_rotation(num:int):
    #print(f"ORIG >>> {num}")
    MIN_ROTATE_LENGTH = 2
    for length in range(len(str(num)), MIN_ROTATE_LENGTH - 1, -1):
        num = rotate_rightmost_digits(num, length)
        #print(f"len={length} >>> num={num}")
    #print(f"FINAL >>> {num}")
    return num

    


def rotate_lst(orig_lst):
    if not isinstance(orig_lst, list):
        return None
    if not orig_lst:
        return []
    return orig_lst[1:] + [orig_lst[0]]

def rotate_rightmost_digits(integer, count):
    list_of_digits = list(str(integer))
    left = list_of_digits[: count * -1]
    right = rotate_lst(list_of_digits[count * -1:])
    return int(''.join(left + right))


print(max_rotation(735291) == 321579)          # True
print(max_rotation(3) == 3)                    # True
print(max_rotation(35) == 53)                  # True
print(max_rotation(8703529146) == 7321609845)  # True

# Note that the final sequence here is `015`. The leading
# zero gets dropped, though, since we're working with
# an integer.
print(max_rotation(105) == 15)                 # True