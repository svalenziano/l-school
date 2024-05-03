# Assignment from: https://launchschool.com/lessons/a29e9831/assignments/ef6f89fd

def prompt(message):
    print(f"==> {message}")

def invalid_number(number_str):
    try:
        int(number_str)
    except ValueError:
        return True

    return False

'''
TODO
    - put code in while loop
    - ask at end of loop
    - Keep asking in case of invalid input
'''

prompt('Welcome to Calculator!')

while True:

    prompt("What's the first number?")
    number1 = input()

    while invalid_number(number1):
        prompt("Hmm... that doesn't look like a valid number.")
        number1 = input()

    prompt("What's the second number?")
    number2 = input()

    while invalid_number(number2):
        prompt("Hmm... that doesn't look like a valid number.")
        number2 = input()

    prompt("""\
What operation would you like to perform?
1) Add 2) Subtract 3) Multiply 4) Divide""")
    operation = input()

    while operation not in ["1", "2", "3", "4"]:
        prompt("You must choose 1, 2, 3, or 4")
        operation = input()

    match operation:
        case "1":
            output = int(number1) + int(number2)
        case "2":
            output = int(number1) - int(number2)
        case "3":
            output = int(number1) * int(number2)
        case "4":
            try:
                output = int(number1) / int(number2)
            except ZeroDivisionError:
                prompt("Dividing by zero!?!? How dare you! Try again.")
                continue

    prompt(f"The result is {output}")

    prompt("Would you like to keep going? Y/N ")
    keep = input().lower()
    while keep not in ['y' , 'n', '']:
        prompt("Invalid input, can you say again?")
        keep = input().lower()
    
    if keep == 'n':
        print("Okay, quitting, later!")
        break
