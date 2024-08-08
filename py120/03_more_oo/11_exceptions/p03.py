try:
    num1 = float(input('Enter the first number: '))
    num2 = float(input('Enter the second number: '))
    result = num1 / num2
except (ZeroDivisionError, ValueError) as e:
    print(f"ERROR: {e}")
else:
    print(f'The result is: {result}')
finally:
    print("End of the program")
