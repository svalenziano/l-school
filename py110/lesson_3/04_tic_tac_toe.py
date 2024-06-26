'''
TODO:
- print 'last moves' in case the user blinks and doesn't see where the computer placed their mark
- Convert for loops using `enumerate` into comprehensions (just to practice nested comprehensions)
- see inline 'TODO's

'''




import os, random, time, pprint
from copy import deepcopy

SYMBOLS = {
    'human': 'X',
    'computer': '0',
    'placeholder': '?',
    'empty': ' ',
}

WINNING_BOARD_TEMPLATES = [
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

def init_winning_board(board_templates, symbol):
    winning_boards = deepcopy(board_templates)
    for board in winning_boards:
        board_find_replace(board, '?', symbol)
    return winning_boards

def board_find_replace(board, find, replace):
    '''
    Side effect: Mutates the 'board' object
    Returns: None
    TODO: convert to comprehension
    '''
    for row_idx, row in enumerate(board):
        for cell_idx, cell in enumerate(row):
            if cell == find:
                board[row_idx][cell_idx] = replace


def init_board():
    board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    ]
    return board


def clear_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

def return_valid_choices(board):
    '''
    Input = board (nested list)
    Output = list of valid choices, as '<col>,<row>' strings
    '''
    valid_choices = []
    for row_num, row in enumerate(board):
        # for every column
        for col_num, cell in enumerate(row):
            if cell == ' ':
                valid_choices.append(f'{col_num},{row_num}')
    return valid_choices

def display_board(board, clear = False):
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

def display_board_and_msg(msg, board):
    display_board(board, clear=True)
    prompt(msg)

def help(choice, help_text):
    if choice.casefold() in ['h', 'help']:
        print(help_text)

def get_valid_input(valid_choices, msg_txt, help_txt, board):
    '''
    🔍 CODE REVIEW: Should this function be broken up?  It currently has both
        a return value AND side effects (input AND output)
    TODO: 
        - specific error message if the user picks a choice that's valid, but taken
    Input: Valid choices as a list
    '''
    display_board_and_msg(msg_txt, board)
    while True:
        choice = input().casefold().strip().replace(' ','')
        if choice in valid_choices:
            return choice
        elif choice in ['h', 'help']:
            display_board_and_msg('HINT:', board)
            prompt(help_txt)
        elif choice in ['q', 'quit']:
            print('Goodbye!')
            quit()
        else:
            error_msg = f"Invalid input ☹️.  I heard: '{choice}'. Enter 'h' for help."
            display_board_and_msg(error_msg, board)
            prompt(help_txt)

def add_choice_to_board(choice, board, symbol):
    column, row = choice.split(',')  # expects CSV string: '<row>,<column>'
    column = int(column)
    row = int(row)
    board[row][column] = symbol
    display_board_and_msg('', board)
    return board

def return_computer_choice(valid_choices):
    '''
    Input:
    - board
    Output:
    - updated board
    '''
    # randomly choose among valid choices
    choice = random.choice(valid_choices)
    return choice

def delay_short():
    time.sleep(0.25)

def return_winner(board):
    '''
    Input = board
    Return = winner
    '''
    # remove all 0's, and compare to human winning boards
    
    human_winning_boards = init_winning_board(WINNING_BOARD_TEMPLATES, 
                                              SYMBOLS['human'])

    temp_board = deepcopy(board)
    board_find_replace(temp_board, SYMBOLS['computer'], SYMBOLS['empty'])
    for win in human_winning_boards:
        if temp_board == win:
            return 'human'

    # remove all X's and compare to computer winning boards
    computer_winning_boards = init_winning_board(WINNING_BOARD_TEMPLATES,
                                                SYMBOLS['computer'])
    temp_board = deepcopy(board)
    board_find_replace(temp_board, SYMBOLS['human'], SYMBOLS['empty'])
    
    # debug
    display_board(temp_board)
    breakpoint()

    for win in computer_winning_boards:
        if temp_board == win:
            return 'computer'

def main():
    # init human winning boards
    # init compute rwinning boards
    board = init_board()


    
    valid_choices = return_valid_choices(board)
    display_board(board, clear=True)
    
    while True:
        help_text = "Where would you like your X? " + \
                    "Format = <Column,Row>. " + \
                    "Example '2,2' for bottom-right."
        choice = get_valid_input(valid_choices, 'Your turn!', help_text, board)
        board = add_choice_to_board(choice, board, SYMBOLS['human'])
        if return_winner(board) == 'human':
            print('You win!')
            breakpoint()
        
        valid_choices = return_valid_choices(board)
        
        delay_short()

        choice = return_computer_choice(valid_choices)
        board = add_choice_to_board(choice, board, SYMBOLS['computer'])
        if return_winner(board) == 'computer':
            print('Computer wins!')
            breakpoint()

        valid_choices = return_valid_choices(board)
        delay_short()

        #if winner_exists(board):


main()