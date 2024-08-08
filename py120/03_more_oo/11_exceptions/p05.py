class NegativeNumberError(ValueError):
    pass

num = float(input('Enter a number: '))
if num < 0:
    raise NegativeNumberError('Negative numbers are not allowed!')
print(f'You entered {num}')