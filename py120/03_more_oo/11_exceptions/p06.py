def invert(lst):
    try:
        inverted = [1/num for num in lst]
        return inverted
    except ZeroDivisionError as e:
        print("ERROR: At least one of your list elements is a zero")
    except TypeError as e:
        print(f"ERROR: {e}")
        print("Is one of your list elements not a number?")
    else:
        return inverted

lists = [
    [1, 2, 3, 4, 5, 6],
    [-10, -4, 1.45, 230.2398],
    [1, 0, 1],
    [6, 'abc', 'd']
]

for i in lists:
    x = invert(i)
    if x:
        print(x)
    
