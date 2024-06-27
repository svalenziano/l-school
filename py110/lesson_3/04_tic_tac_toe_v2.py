'''
TODO:
- print 'last moves' in case the user blinks and doesn't see where the computer placed their mark
- Convert for loops using `enumerate` into comprehensions (just to practice nested comprehensions)
- see inline 'TODO's

'''




import os, random, time, pprint
from copy import deepcopy

MARKS = {
    'human': 'X',
    'computer': '0',
    'placeholder': '?',
    'empty': ' ',
}

WINNING_BOARDS = [
    [
        ['?', ' ', ' '],
        ['?', ' ', ' '],
        ['?', ' ', ' '],
    ],
    [
        [' ', '?', ' '],
        [' ', '?', ' '],
        [' ', '?', ' '],
    ],
    [
        [' ', ' ', '?'],
        [' ', ' ', '?'],
        [' ', ' ', '?'],
    ],
    [
        ['?', '?', '?'],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ],
    [
        [' ', ' ', ' '],
        ['?', '?', '?'],
        [' ', ' ', ' '],
    ],
    [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        ['?', '?', '?'],
    ],
    [
        ['?', ' ', ' '],
        [' ', '?', ' '],
        [' ', ' ', '?'],
    ],
    [
        [' ', ' ', '?'],
        [' ', '?', ' '],
        ['?', ' ', ' '],
    ],
]

# ****************************************************************************
# FUNCTIONS
# ****************************************************************************


def reset_board():
    board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    ]
    return board

def clear_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

def update_valid_choices():
    '''
    Input = board (nested list)
    Output = list of valid choices, as '<col>,<row>' strings
    TODO:
        - make comprehension, similar to: https://launchschool.com/lessons/62aa893f/assignments/1bc31bcf#:~:text=To%20fix%20this%20problem%2C%20we%20must%20use%20the
    '''
    valid_choices.clear()
    for row_num, row in enumerate(board):
        # for every column
        for col_num, cell in enumerate(row):
            if cell == ' ':
                valid_choices.append(f'{col_num},{row_num}')


def display_board(clear = True):
    if clear:
        clear_terminal()
    print('  0     1     2  ')
    print(' _________________ ')
    print('|     |     |     |') 
    print(f'|  {board[0][0]}  |  {board[0][1]}  |  {board[0][2]}  |  0')
    print('|     |     |     |')
    print('|-----+-----+-----|')
    print('|     |     |     |')
    print(f'|  {board[1][0]}  |  {board[1][1]}  |  {board[1][2]}  |  1')
    print('|     |     |     |')
    print('|-----+-----+-----|')
    print('|     |     |     |')
    print(f'|  {board[2][0]}  |  {board[2][1]}  |  {board[2][2]}  |  2')
    print('|_____|_____|_____|')

def prompt(msg):
    print(f"==> {msg}")

def help(choice, help_text):
    if choice.casefold() in ['h', 'help']:
        prompt(help_text)

def display_board_and_msg(msg):
    display_board()
    prompt(msg)

def prompt_valid_input(valid_choices, msg_txt, help_txt):
    '''
    🔍 CODE REVIEW: Should this function be broken up?  It currently has both
        a return value AND side effects (input AND output)
    TODO: 
        - specific error message if the user picks a choice that's valid, but taken
    Input: Valid choices as a list
    '''
    display_board_and_msg(msg_txt)
    while True:
        choice = input().casefold().strip().replace(' ','')
        if choice in valid_choices:
            return choice
        elif choice in ['h', 'help']:
            display_board_and_msg('HINT:')
            prompt(help_txt)
        elif choice in ['q', 'quit']:
            prompt_goodbye_and_quit()
            quit()
        else:
            error_msg = f"Invalid input ☹️.  I heard: '{choice}'. \
Enter 'h' for help."
            display_board_and_msg(error_msg)
            prompt(help_txt)

def prompt_play_again():
    msg_txt = "Would you like to play again?"
    help_txt = "Enter 'y' to play again, 'n' to quit"
    valid_choices = ['y', 'n']
    choice = prompt_valid_input(valid_choices, msg_txt, help_txt)
    if choice == 'n':
        prompt_goodbye_and_quit()
    else:
        mutate_outcome('play_again')

def prompt_goodbye_and_quit():
    messages = [
        'Goodbye! 😃',
        'Good riddance! 😃',
        'Have a nice day! 😃',
    ]
    print(random.choice(messages))
    quit()

def add_choice_to_board(choice, symbol):
    column, row = choice.split(',')  # expects CSV string: '<row>,<column>'
    column = int(column)
    row = int(row)
    board[row][column] = symbol

def return_computer_choice(valid_choices):
    # randomly choose among valid choices
    choice = random.choice(valid_choices)
    return choice

def delay_short():
    time.sleep(0.25)

def compare_against_winning_boards():
    '''
    Input = board
    Return = winner
    '''
    # compare each winning board to the current board    
    for win_board in WINNING_BOARDS:
        set_of_marks = set()
        for row_idx, row in enumerate(win_board):
            for col_idx, cell in enumerate(row):
                if cell == MARKS['placeholder']:
                    set_of_marks = set_of_marks.union(set(board[row_idx][col_idx]))
        if set_of_marks == set(MARKS['human']):
            return 'human'
        if set_of_marks == set(MARKS['computer']):
            return 'computer'
    # breakpoint()

def player_chooses():
    help_text = "Where would you like your X? " + \
                    "Format = <Column,Row>. " + \
                    "Example '2,2' for bottom-right."
    msg_text = 'Your turn!'
    choice = prompt_valid_input(valid_choices, msg_text, help_text)
    add_choice_to_board(choice, MARKS['human'])
    update_valid_choices()
    display_board()

def computer_chooses():
    choice = random.choice(valid_choices)
    add_choice_to_board(choice, MARKS['computer'])
    update_valid_choices()
    delay_short()
    display_board()


def mutate_outcome(new_string):
    outcome.clear()
    outcome.append(new_string)

def update_outcome():
    if not valid_choices:
        mutate_outcome('tie')
        return
    if compare_against_winning_boards() == 'human':
        mutate_outcome('human_wins')
        return
    if compare_against_winning_boards() == 'computer':
        mutate_outcome('computer_wins')
        return
    mutate_outcome('undecided')

def display_result():
    display_board()
    if outcome == ['human_wins']:
        prompt('You win! 💃')
    if outcome == ['computer_wins']:
        prompt('You lose ☹️')
    if outcome == ['tie']:
        prompt("It's a tie! 😬")
    else:
        prompt('Something has gone terribly wrong')


def prompt_introduction():
    print('INTRODUCTION PLACEHOLDER')
    delay_short()
    delay_short()
    delay_short()

# ****************************************************************************
# MAIN LOOP
# ****************************************************************************


board = reset_board()
outcome = ['undecided']
valid_choices = []
update_valid_choices()
prompt_introduction()

while True:
    player_chooses()
    update_outcome()
    
    if outcome == ['undecided']:
        computer_chooses()
        update_outcome()

    if outcome != ['undecided']:
        display_result()
        prompt_play_again()

    if outcome == ['play_again']:
        reset_board()
        update_valid_choices()

