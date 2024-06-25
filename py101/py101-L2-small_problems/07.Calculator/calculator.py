print('Welcome to the Calculator!  :)')

# Ask the user for the first number
no1 = int(input("What's the first number? "))

# Ask the user for the 2nd number
no2 = int(input("What's the second number? "))

# print(f"no1 = {no1}, no2 = {no2}")

# Ask the user for an operation to perform
operation = int(input("What operation would you like to perform? \n\
1) Add 2) Subtract 3) Multiply 4) Divide "))

# Perform the operation on the 2 numbers
match operation:
    case 1:
        output = no1 + no2
    case 2:
        output = no1 - no2
    case 3:
        output = no1 * no2
    case 4:
        output = no1 / no2
    case _:
        output = "Something has gone terribly wrong"


# Print the result to the terminal
print(f"The result is: {output}")
