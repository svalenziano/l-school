print(); print('Welcome to the Divider 3000!')

while True:
    print()
    try:
        num1 = input('Your first number? ')
        num2 = input('Your second number? ')
        num1 = float(num1)
        num2 = float(num2)
    except ValueError: 
        print("Numbers only! Please try again...")
        continue
    try:
        result = num1 / num2
        print(f"Result = {result}")
    except ZeroDivisionError:
        print("You can't divide by zero :(")
        continue