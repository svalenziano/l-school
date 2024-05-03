# Assignment from: https://launchschool.com/lessons/a29e9831/assignments/ef6f89fd

import json

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
    tktk
DEVLOG
    See Jupyter notebook
'''

with open('2.json', 'r') as file:
    MSG = json.load(file)   # MSG = short for MESSAGES

prompt('Welcome to Calculator!')

while True:

    prompt(MSG.get('first'))
    number1 = input()

    while invalid_number(number1):
        prompt(MSG.get('invalid_no'))
        number1 = input()

    prompt(MSG.get('second'))
    number2 = input()

    while invalid_number(number2):
        prompt(MSG.get('invalid_no'))
        number2 = input()

    prompt(MSG.get('operation'))
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
                prompt(MSG.get('div_by_zero'))
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
