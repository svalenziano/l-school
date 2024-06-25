import os, random, time

SYMBOLS = {
    'human': 'X',
    'computer': '0',
}

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

def display_board(board):
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

def init_board():
    board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    ]
    return board

def prompt(msg):
    print(f"==> {msg}")

def display_board_and_msg(msg, board):
    display_board(board)
    prompt(msg)

def help(choice, help_text):
    if choice.casefold() in ['h', 'help']:
        print(help_text)

def get_valid_input(valid_choices, msg_txt, help_txt, board):
    '''
    🔍 CODE REVIEW: Should this function be broken up?  It currently has both
        a return value AND side effects (input AND output)
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
            i = f"Invalid input ☹️.  I heard: '{choice}'"
            display_board_and_msg(i, board)
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

def main():
    board = init_board()
    valid_choices = return_valid_choices(board)
    display_board(board)
    
    while True:
        help_text = "Where would you like your X? " + \
                    "Format = <Column,Row>. " + \
                    "Example '2,2' for bottom-right."
        choice = get_valid_input(valid_choices, 'Your turn!', help_text, board)
        board = add_choice_to_board(choice, board, SYMBOLS['human'])
        valid_choices = return_valid_choices(board)
        delay_short()

        choice = return_computer_choice(valid_choices)
        board = add_choice_to_board(choice, board, SYMBOLS['computer'])
        valid_choices = return_valid_choices(board)
        delay_short()


main()