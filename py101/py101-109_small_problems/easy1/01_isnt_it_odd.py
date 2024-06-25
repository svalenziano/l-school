def is_odd(integer):
    # absolute_value = integer if integer >= 0 else integer * -1
    if integer % 2 != 0:
        return True
    return False

for i in range(-10,11):
    print(i, is_odd(i))

