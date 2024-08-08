def div(a, b):
    try:
        return float(a) / float(b)
    except ValueError as e:
        print("Both values must be numbers")
        print(e)
    except ZeroDivisionError as e:
        print("You can't divide by zero! 😱")
        print(e)

while True:
    print()
    a = input('Number? ')
    b = input('Divisor? ')
    c = div(a, b)
    if c:
        print(c)