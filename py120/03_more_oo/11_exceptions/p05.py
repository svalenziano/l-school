'''
P
Modify your answer from the previous problem to raise a custom exception named NegativeNumberError instead of an ordinary ValueError exception.
E
D
A
'''

class NegativeNumberError(ValueError):
    def __init__(self, message="Number cannot be negative."):
        super().__init__(message)

try:
    num = float(input("Gimme a positive number pls "))
    if num < 0:
        raise NegativeNumberError()
    if num % 1 == 0:
        num = int(num)
except ValueError as e:
    print(f"{e.__class__.__name__}: {e}")
else:
    print(f"Your number is ... {num}!!!")