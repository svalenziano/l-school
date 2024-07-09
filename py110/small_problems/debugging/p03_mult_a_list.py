



def multiply_list_ORIGINAL(lst):
    for item in lst:
        item *= 2

    return lst

'''
SV EXPLANATION:
    - Intended result = multiply all elements by two
    - The original function does not modify the `lst` object, 
        it only creates a new integer for each `item in lst`.  Because
        this integer is not assigned to a new variable or the exst `lst`
        the orig `lst` is not modified.
'''


def multiply_list(lst):
    return [num * 2 for num in lst]


print(multiply_list([1, 2, 3]) == [2, 4, 6])