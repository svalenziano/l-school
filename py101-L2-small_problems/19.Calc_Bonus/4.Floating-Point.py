# Assignment from: https://launchschool.com/lessons/a29e9831/assignments/ef6f89fd

import json
import pdb

def prompt(message):
    print(f"==> {message}")

def invalid_number(number_str):
    try:
        float(number_str)
    except ValueError:
        return True

    return False

def lang_prompt(key):
    prompt( MSG[key][lang] )

'''
TODO
    tktk
DEVLOG
    See Jupyter notebook
'''


with open('3.json', 'r') as file:
    MSG = json.load(file)   # MSG = short for MESSAGES

prompt('Welcome to Calculator!')

prompt("""\
Select your language:
en = English  
es = Español
""")
lang = input()
while lang not in ['en', 'es']:
    lang_prompt('invalid_language')
    lang = input()

while True:

    lang_prompt('first')
    number1 = input()

    while invalid_number(number1):
        lang_prompt('invalid_no')
        number1 = input()

    lang_prompt('second')
    number2 = input()

    while invalid_number(number2):
        lang_prompt('invalid_no')
        number2 = input()

    lang_prompt('operation')
    operation = input()

    while operation not in ["1", "2", "3", "4"]:
        lang_prompt('invalid_operation')
        operation = input()

    match operation:
        case "1":
            output = float(number1) + float(number2)
        case "2":
            output = float(number1) - float(number2)
        case "3":
            output = float(number1) * float(number2)
        case "4":
            try:
                output = float(number1) / float(number2)
            except ZeroDivisionError:
                lang_prompt('div_by_zero')
                continue

    prompt(MSG['result'][lang] + str(output))

    lang_prompt('keepgoing')
    keep = input().lower()
    while keep not in ['y' , 'n', '']:
        lang_prompt('invalid_generic')
        keep = input().lower()
    
    if keep == 'n':
        lang_prompt('quitting')
        break
