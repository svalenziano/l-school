def prompt(message):
    '''
    Input: message to display
    Prints: message with '==>' prepended and one space appended
    Output: user input as int
    '''
    # display message
    x = input(f"==> {message} ")
    # return user input as int
    return x

def invalid_number(number_str):
    try:
        int(number_str)
    except ValueError:
        return True
    return False

print('Welcome to the Calculator!  :)')

# Ask the user for the first number
no1 = prompt("What's the first number?")

while invalid_number(no1):
    no1 = prompt("Hmmm, that's not a valid number yo!  Try again pls.")

# Ask the user for the 2nd number
no2 = prompt("What's the second number?")

while invalid_number(no2):
    no2 = prompt("OMG NAN, please gimme a number")

# print(f"no1 = {no1}, no2 = {no2}")

# Ask the user for an operation to perform
operation = prompt("""What operation would you like to perform?
1) Add 2) Subtract 3) Multiply 4) Divide""")

while operation not in ['1','2','3','4']:
    operation = prompt("You must choose 1,2,3, or 4")

no1 = int(no1)
no2 = int(no2)
operation = int(operation)

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
