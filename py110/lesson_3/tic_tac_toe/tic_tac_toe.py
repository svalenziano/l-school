'''
TODO:
    - replace tktks
    - remove tests
'''



import os
import random
import time
import sys
import yaml

with open('tic_tac_toe.yaml', 'r') as file:
    msgs = yaml.safe_load(file)

# How many in a row are required to win?
QTY_REQUIRED_TO_WIN = 3

# 2 marks in a row is an 'almost win'
QTY_ALMOST_WIN = 2

# The center cell is always the best first move
CENTER_CELL = (1,1)

# These marks/symbols are used to mark moves on the board
MARK_HUMAN = 'X'
MARK_COMPUTER = '0'
# MARK_PLACEHOLDER = '?'
MARK_EMPTY = ' '


# ****************************************************************************
# FUNCTIONS
# ****************************************************************************



def reset_board():
    clean_board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    ]
    return clean_board

def clear_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

def update_valid_moves(board):
    valid_moves = []
    empty_cells = return_all_locations_for_mark(board, MARK_EMPTY)
    for row, col in empty_cells:
        valid_moves.append(f'{row},{col}')
    return valid_moves


def display_board(board, msg='', clear = True):
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
        if isinstance(msg, str):
            delay_short()
            prompt(msg)
        elif isinstance(msg, list):
            for i in msg:
                delay_short()
                prompt(i)
        else:
            prompt(msgs['error_generic'])

def display_intro(board):
    clear_terminal()
    intro_text = msgs['intro_text']
    for line in intro_text.splitlines():
        print(line)
        time.sleep(0.05)
    if input():
        prompt_valid_input(
            board,
            ['', 'y', 'yes', 'okay', 'whatever'],
            msgs['intro_confused'],
            msgs['intro_help'],
            )

def prompt(msg):
    msg = msg.splitlines()
    for line in msg:
        print(f"==> {line}")

def flash_msg(board, msg):
    def flash_on():
        display_board(board, msg)
        time.sleep(0.3)

    def flash_off():
        display_board(board)
        time.sleep(0.15)

    for i in range(0,6):
        if i % 2 == 1:
            flash_on()
        else:
            flash_off()

def prompt_valid_input(board,
                       valid_choices:list,
                       msg_txt,
                       help_txt,
                       delay:int = 0):
    '''
    Input: Valid choices as a list
    '''
    display_board(board, msg_txt)
    time.sleep(delay)
    while True:
        # Remove commas and quotes in case they're accidentally entered
        choice = input().casefold().strip(" ,'").replace(' ','')
        if choice in valid_choices:
            return choice
        if choice in ['h', 'help', '?,']:
            display_board(board, ['HINT:', help_txt])
        elif choice in ['q', 'quit']:
            prompt_goodbye_and_quit()
        else:
            error_msg = \
            f"Invalid input ☹️.  I heard: '{choice}'.  Enter 'h' for help."
            display_board(board, error_msg)
            prompt(help_txt)

def prompt_play_again(board, outcome):
    choice = prompt_valid_input(board,
                                valid_choices = ['y', 'n'],
                                msg_txt = [outcome, msgs['play_again_msg']],
                                help_txt = msgs['play_again_help'],
                                delay=0.5)
    if choice == 'n':
        return False
    return True

def prompt_goodbye_and_quit():
    print(random.choice(msgs['goodbye']))
    sys.exit()

def add_choice_to_board(choice:tuple, symbol, board):
    column, row = choice
    board[row][column] = symbol
    return board

def delay_short():
    time.sleep(0.25)

def about_to_win(board, mark):
    '''
    Limitations: will not return multiple cells if there are
        multiple locations where the `mark` is about to win.
    '''
    for scenario in return_win_scenarios():
        taken = []
        available = []
        for col_idx, row_idx in scenario:
            cell = board[row_idx][col_idx]
            coords = (col_idx, row_idx)
            if cell == MARK_EMPTY:
                available.append(coords)
            elif cell == mark:
                taken.append(coords)
        if len(taken) == QTY_ALMOST_WIN and len(available) > 0:
            return available[0]
    return None

def return_computer_choice(board):
    '''
    INPUT:
    OUTPUT: computer choice as (x,y) tuple
    '''
    computer_winning_move = about_to_win(board, MARK_COMPUTER)
    if computer_winning_move:
        return computer_winning_move
    human_winning_move = about_to_win(board, MARK_HUMAN)
    if human_winning_move:
        return human_winning_move
    empty_cells = return_all_locations_for_mark(board, MARK_EMPTY)
    if CENTER_CELL in empty_cells:
        return CENTER_CELL
    return random.choice(empty_cells)

def convert_csv_to_tuple(csv_string):
    col, row = csv_string.split(',')
    return (int(col), int(row))

def player_chooses(board):
    valid_moves = update_valid_moves(board)
    choice_string = prompt_valid_input(
        board,
        valid_moves,
        msgs['player_chooses_msg'],
        msgs['player_chooses_help'].format(MARK_HUMAN, valid_moves)
        )
    choice = convert_csv_to_tuple(choice_string)
    board = add_choice_to_board(choice, MARK_HUMAN,board)
    return board

def computer_chooses(board):
    choice = return_computer_choice(board)
    board = add_choice_to_board(choice, MARK_COMPUTER,board)
    delay_short()
    return board

def return_all_locations_for_mark(test_board, mark_to_find):
    mark_locations = []
    for row_idx, row in enumerate(test_board):
        for col_idx, cell in enumerate(row):
            if cell == mark_to_find:
                mark_locations.append((col_idx, row_idx))
    return mark_locations

def return_win_scenarios():
    '''
    Need to change winning scenarios? See `notes.py`
    '''
    winning_scenarios = [
        [(0, 0), (0, 1), (0, 2)],
        [(1, 0), (1, 1), (1, 2)],
        [(2, 0), (2, 1), (2, 2)],
        [(0, 0), (1, 0), (2, 0)],
        [(0, 1), (1, 1), (2, 1)],
        [(0, 2), (1, 2), (2, 2)],
        [(0, 0), (1, 1), (2, 2)],
        [(2, 0), (1, 1), (0, 2)]
    ]
    return winning_scenarios

def test_for_winner(board):

    for scenario in return_win_scenarios():
        set_of_marks = set()
        for col_idx, row_idx in scenario:
            set_of_marks.add(board[row_idx][col_idx])
        # if there's only one mark in the scenario
        if len(set_of_marks) == 1:
            return set_of_marks.pop()
    return None

def board_is_full(board):
    return len(return_all_locations_for_mark(board, MARK_EMPTY)) == 0

def return_outcome(board):
    outcome = None
    if board_is_full(board):
        outcome = 'tie'
    elif test_for_winner(board) == MARK_HUMAN:
        outcome = 'human_wins'
    elif test_for_winner(board) == MARK_COMPUTER:
        outcome = 'computer_wins'
    if outcome:
        return random.choice(msgs['outcomes'][outcome])
    return None


def test():
    outcome = None
    board = [
        [' ', ' ', 'X'],
        [' ', 'X', ' '],
        ['X', ' ', ' '],
    ]
    print(return_all_locations_for_mark(board, mark_to_find = MARK_EMPTY))
    board = computer_chooses(board)
    outcome = return_outcome(board)
#    for i in range(10):
#        print(random.choice(msgs['outcomes']['tie']))
    # breakpoint()
    pass

def main():
    board = reset_board()
    outcome = None
    display_intro(board)

    while True:
        while not outcome:
            board = player_chooses(board)
            display_board(board)
            outcome = return_outcome(board)
            if outcome:
                break

            board = computer_chooses(board)
            display_board(board)
            outcome = return_outcome(board)

        flash_msg(board, outcome)

        if prompt_play_again(board, outcome):
            outcome = None
            board = reset_board()
        else:
            prompt_goodbye_and_quit()



if __name__ == '__main__':
    #test()
    breakpoint()
    main()