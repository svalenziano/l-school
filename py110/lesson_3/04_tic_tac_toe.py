import os, random, time


def clear_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

def init_valid_choices():
    choices = []
    for col in [0, 1, 2]:
        for row in [0, 1, 2]:
            choices.append(f"{col},{row}")
    return choices


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
    Input: Valid choices as a list
    '''
    display_board_and_msg(msg_txt, board)
    while True:
        choice = input().casefold().strip().replace(' ','')
        if choice in valid_choices:
            return choice
        elif choice in ['h', 'help']:
            display_board_and_msg(help_txt, board)
        elif choice in ['q', 'quit']:
            print('Goodbye!')
            quit()
        else:
            i = f"Invalid input ☹️.  I heard: '{choice}'"
            display_board_and_msg(i, board)
            prompt(help_txt)

def add_choice_to_board(choice, board):
    column, row = choice.split(',')  # expects CSV string: '<row>,<column>'
    column = int(column)
    row = int(row)
    board[row][column] = 'X'
    display_board_and_msg('', board)
    return board

def add_computer_choice_to_board(board):
    '''
    Input:
    - board
    Output:
    - updated board
    '''
    # determine valid choices
    

    # randomly choose among valid choices

    # update board

    return board

def main():
    valid_choices = init_valid_choices()
    board = init_board()
    display_board(board)
    
    while True:
        help_text = "Where would you like your X? " + \
                    "Format = <Column,Row>. " + \
                    "Example '2,2' for bottom-right."
        choice = get_valid_input(valid_choices, 'Your turn!', help_text, board)
        board = add_choice_to_board(choice, board)

main()