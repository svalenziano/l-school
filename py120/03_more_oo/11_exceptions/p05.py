'''
P
Modify your answer from the previous problem to raise a custom exception named NegativeNumberError instead of an ordinary ValueError exception.
E
D
A
'''

class NegativeNumberError(ValueError):
    pass

try:
    raise NegativeNumberError("Here's a message")
except NegativeNumberError as e:
    print(f"{e.__class__.__name__}: {e}")
    print((e))
    print(str(e))
    print(repr(e))
    print(type(e))