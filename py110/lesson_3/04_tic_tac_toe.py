import os, random, time, pprint
from copy import deepcopy

# How many in a row are required to win?
QTY_REQUIRED_TO_WIN = 3

# 2 marks in a row is an 'almost win'
QTY_ALMOST_WIN = 2   

# The center cell is always the best first move
CENTER_CELL = (1,1)

# These marks/symbols are used to mark moves on the board
MARKS = {
    'human': 'X',
    'computer': '0',
    'placeholder': '?',
    'empty': ' ',
}

WINNING_SCENARIOS_VISUAL = [
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
# ****************************************************************************
# FUNCTIONS
# ****************************************************************************
# ****************************************************************************

def convert_winning_scenarios_to_coordinates():
    winning_scenarios = []
    for scenario in WINNING_SCENARIOS_VISUAL:
        winning_scenarios.append(
            return_all_locations_for_mark(scenario, MARKS['placeholder']))
    return winning_scenarios

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
    valid_choices.clear()
    empty_cells = return_all_locations_for_mark(board, MARKS['empty'])
    for row, col in empty_cells:
        valid_choices.append(f'{row},{col}')


def display_board(msg:list = [], clear = True):
    '''
    msg = messages.  Each element in the list prints as a separate line.
    '''
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
    if msg:
        if type(msg) == str:
            delay_short()
            prompt(msg)
        elif type(msg) == list:
            for i in msg:
                delay_short()
                prompt(i)
        else:
            prompt("🔴 Something has gone terribly wrong")

def display_intro():
    clear_terminal()
    intro_text = '''WELCOME TO TIC-TAC-TOE 

    REMEMBER TO GIVE IT 110%!

    IF YOU GET LOST OR BORED:
    Enter 'h' anytime to get help.
    Enter 'q' anytime to quit.
        
    Press 'Enter' to start playing! 🙌
    '''
    for line in intro_text.splitlines():
        print(line)
        time.sleep(0.05)
    input()

def prompt(msg):
    msg = msg.splitlines()
    for line in msg:
        print(f"==> {line}")

def flash_msg(msg):
    def flash_on():
        display_board(msg)
        time.sleep(0.3)
    
    def flash_off():
        display_board()
        time.sleep(0.15)
    
    for i in range(0,6):
        if i % 2 == 1:
            flash_on()
        else:
            flash_off()

def prompt_valid_input(valid_choices:list, msg_txt, help_txt, delay:int = 0):
    '''
    Input: Valid choices as a list
    '''
    display_board(msg_txt)
    time.sleep(delay)
    while True:
        # Remove commas and quotes in case they're accidentally entered
        choice = input().casefold().strip(" ,'").replace(' ','')
        if choice in valid_choices:
            return choice
        elif choice in ['h', 'help', '?,']:
            display_board(['HINT:', help_txt])
        elif choice in ['q', 'quit']:
            prompt_goodbye_and_quit()
        else:
            error_msg = \
            f"Invalid input ☹️.  I heard: '{choice}'.  Enter 'h' for help."
            display_board(error_msg)
            prompt(help_txt)

def prompt_play_again():
    valid_choices = ['y', 'n']
    msg_txt = [outcome, "Would you like to play again? (y/n)"]
    help_txt = "Enter 'y' to play again, 'n' to quit"
    choice = prompt_valid_input(valid_choices, msg_txt, help_txt, delay=0.5)
    if choice == 'n':
        prompt_goodbye_and_quit()
    else:
        return True

def prompt_goodbye_and_quit():
    messages = [
        'Goodbye! 😃',
        'Good riddance! 😃',
        'Have a nice day! 😃',
    ]
    print(random.choice(messages))
    quit()

def add_choice_to_board(choice:tuple, symbol):
    column, row = choice
    board[row][column] = symbol

def delay_short():
    time.sleep(0.25)

def about_to_win(mark):
    '''
    Limitations: will not return multiple cells if there are 
        multiple locations where the `mark` is about to win.
    '''
    for scenario in winning_scenarios:
        taken = []
        empty = []
        for col_idx, row_idx in scenario:
            cell = board[row_idx][col_idx]
            coords = (col_idx, row_idx)
            if cell == MARKS['empty']:
                empty.append(coords)
            elif cell == mark:
                taken.append(coords)
        if len(taken) == QTY_ALMOST_WIN and len(empty) > 0:
            return empty[0]

def return_computer_choice():
    '''
    INPUT:
    OUTPUT: computer choice as (x,y) tuple
    '''
    computer_winning_move = about_to_win(MARKS['computer'])
    if computer_winning_move:
        return computer_winning_move
    human_winning_move = about_to_win(MARKS['human'])
    if human_winning_move:
        return human_winning_move
    empty_cells = return_all_locations_for_mark(board, MARKS['empty'])
    if CENTER_CELL in empty_cells:
        return CENTER_CELL
    else:
        return random.choice(empty_cells)

def convert_CSV_to_tuple(csv_string):
    col, row = csv_string.split(',')
    return (int(col), int(row))

def player_chooses():
    help_text = f'''Where would you like your {MARKS["human"]}? \
Format = <Column,Row>. Example: '2,2' for bottom-right or \
'0,2' for top right.
Here are your options: {valid_choices}'''
    update_valid_choices()
    msg_text = ['Your turn! (x,y)']
    choice_string = prompt_valid_input(valid_choices, msg_text, help_text)
    choice = convert_CSV_to_tuple(choice_string)
    add_choice_to_board(choice, MARKS['human'])
    display_board()

def computer_chooses():
    update_valid_choices()
    choice = return_computer_choice()
    add_choice_to_board(choice, MARKS['computer'])
    delay_short()
    display_board()

def return_all_locations_for_mark(board, mark_to_find):
    mark_locations = []
    for row_idx, row in enumerate(board):
        for col_idx, cell in enumerate(row):
            if cell == mark_to_find:
                mark_locations.append((col_idx, row_idx))
    return mark_locations

def test_for_winner():
    for scenario in winning_scenarios:
        set_of_marks = set()
        for col_idx, row_idx in scenario:
            set_of_marks.add(board[row_idx][col_idx])
        # if there's only one mark in the scenario
        if len(set_of_marks) == 1:
            return set_of_marks.pop()

def board_is_full():
    return len(return_all_locations_for_mark(board, MARKS['empty'])) == 0

def return_outcome():
    if board_is_full():
        return "It's a tie! 😬"
    if test_for_winner() == MARKS['human']:
        return 'Human wins! 💃'
    if test_for_winner() == MARKS['computer']:
        return 'The computer wins! 💪🖥️'

# ****************************************************************************
# SETUP
# ****************************************************************************

winning_scenarios = convert_winning_scenarios_to_coordinates()
board = reset_board()
outcome = None
valid_choices = []
update_valid_choices()


# ****************************************************************************
# MAIN LOOP
# ****************************************************************************

display_intro()

while True:
    while not outcome:
        player_chooses()
        outcome = return_outcome()
        if outcome:
            break

        computer_chooses()
        outcome = return_outcome()

    flash_msg(outcome)
    
    if prompt_play_again():
        outcome = None
        board = reset_board()