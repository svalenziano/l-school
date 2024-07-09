'''
p
    INPUT = integer, COUNT (INT)
    OUTPUT = ROTATED integer
e
d
    - digits to remain
    - digits to be rotated
a
    - convert to string and split into 'to remain' and `to be rotated`
    - to be rotated
        - rotate the digits
        - re-join into string
        - join back with `to remain` and return
c

RESULT = worked first try 🥲

'''

def rotate_lst(orig_lst):
    if not isinstance(orig_lst, list):
        return None
    if not orig_lst:
        return []
    return orig_lst[1:] + [orig_lst[0]]

def tests1():
    tests = [
        [1,2,3],
        ['a','b','c'],
        [],
        ['a'],
        1,
        2,
        3,
    ]

    for i in tests:
        print(i)
        print(rotate_lst(i))

def rotate_rightmost_digits(integer, count):
    list_of_digits = list(str(integer))
    left = list_of_digits[: count * -1]
    right = rotate_lst(list_of_digits[count * -1:])
    return int(''.join(left + right))

# LS TESTS
print(rotate_rightmost_digits(735291, 2) == 735219)  # True
print(rotate_rightmost_digits(735291, 3) == 735912)  # True
print(rotate_rightmost_digits(735291, 1) == 735291)  # True
print(rotate_rightmost_digits(735291, 4) == 732915)  # True
print(rotate_rightmost_digits(735291, 5) == 752913)  # True
print(rotate_rightmost_digits(735291, 6) == 352917)  # True
print(rotate_rightmost_digits(1200, 3) == 1002)      # True