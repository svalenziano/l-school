'''
Define a function named multiply that accepts two positional-only arguments and returns their product. The function should not allow these parameters to be passed as keyword arguments.
'''


def multiply(num1, num2, /):
    return num1 * num2

print(multiply(1, 2))
print(multiply(2, 8))
print(multiply(1, num2=42))
print(multiply(num1=1, num2=42))