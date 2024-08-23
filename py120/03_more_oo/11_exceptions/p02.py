print(); print('Welcome to the Divider 3000!')
print()

try:
    num1 = input('Your first number? ')
    num2 = input('Your second number? ')
    num1 = float(num1)
    num2 = float(num2)
    result = num1 / num2
    

except ValueError: 
    print("Numbers only! Please try again...")

except ZeroDivisionError:
    print("You can't divide by zero :(")

else:
    print(f"Result = {result}")

finally:
    print('Goodbye!')