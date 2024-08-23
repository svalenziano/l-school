print(); print('Welcome to the Divider 3000!')
print()

try:
    num1 = input('Your first number? ')
    num2 = input('Your second number? ') or 0
    num1 = float(num1)
    num2 = float(num2)
    result = num1 / num2
    

except (ValueError, ZeroDivisionError) as e: 
    # print(f"Error: {e}")
    print("ID of error object:"); print(hex(id(e)))
    print("ID of ValueError"); print(hex(id(ValueError)))
    if isinstance(e, ValueError):
        print("Numbers only! Please try again...")
    if isinstance(e, ZeroDivisionError):
        print("You can't divide by zero :(")

else:
    print(f"Result = {result}")

finally:
    print('Goodbye!')