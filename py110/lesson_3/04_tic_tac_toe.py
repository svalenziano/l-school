




def initialize_valid_choices():
    choices = []
    for col in [0, 1, 2]:
        for row in [0, 1, 2]:
            choices.append(f"{col},{row}")
    return choices


def display_board(board):
    print('  0     1     2  ')
    print('     |     |     ')
    print(f'  {board[0][0]}  |  {board[0][1]}  |  {board[0][2]}    0')
    print('     |     |     ')
    print('-----+-----+-----')
    print('     |     |     ')
    print(f'  {board[1][0]}  |  {board[1][1]}  |  {board[1][2]}    1')
    print('     |     |     ')
    print('-----+-----+-----')
    print('     |     |     ')
    print(f'  {board[2][0]}  |  {board[2][1]}  |  {board[2][2]}    2')
    print('     |     |     ')

def initialize_board():
    board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    ]
    return board

def say(msg):
    print(f"==> {msg}")

def help(choice, help_text):
    if choice.casefold() in ['h', 'help']:
        print(help_text)

def get_user_choice():
    say("Your turn!")
    choice = input()
    
    help_text = "Where would you like your X? Format = Column, Row. " + \
                "Example '2,2' for bottom-right."
    help(choice, help_text)

def get_valid_input(valid_choices, msg_txt, help_txt):
    '''
    Input:
        - Valid choices as a list
            - in the set of valid choices
            - h for help
            - q for quit
        - msg text
        - help text
    Output:
        - valid choice
    '''
    valid_choices.extend(['h', 'help', 'q', 'quit'])
    say(msg_txt)
    x = input().casefold()
    if x in valid_choices:
        return 'valid!'
    else:
        return 'invalid!'


def main():
    VALID_CHOICES = initialize_valid_choices()
    print(VALID_CHOICES)
    board = initialize_board()
    display_board(board)
    print(get_valid_input([1,2,3], 'Your turn!', 'You need help!'))

main()