'''
P
Write a program that asks the user for a number. If the input isn't a number, let Python raise an appropriate exception. If the number is negative, raise a ValueError with an appropriate error message. If the number isn't negative, print a message that shows its value.
E
D
A
'''

try:
    num = float(input("Gimme a positive number pls "))
    if num < 0:
        raise ValueError("I said positive! Try again pls.")
    if num % 1 == 0:
        num = int(num)
except ValueError as e:
    print(f"{e.__class__.__name__}: {e}")
else:
    print(f"Your number is ... {num}!!!")