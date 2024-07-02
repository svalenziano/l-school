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

# How many in a row are required to win?
REQUIRED_TO_WIN = 3

# 2 marks in a row is an 'almost win'
ALMOST_WIN = 2   

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

def return_all_locations_for_mark(board, mark_to_find):
    mark_locations = []
    for row_idx, row in enumerate(board):
        for col_idx, cell in enumerate(row):
            if cell == mark_to_find:
                mark_locations.append((col_idx, row_idx))
    return mark_locations

def return_mark_at_location(board, row_idx, col_idx):
    pass

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

def prompt(msg):
    print(f"==> {msg}")

def prompt_valid_input(valid_choices:list, msg_txt, help_txt, delay:int = 0):
    '''
    Input: Valid choices as a list
    '''
    display_board(msg_txt)
    time.sleep(delay)
    while True:
        choice = input().casefold().strip(' ,').replace(' ','')
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

def celebrate(msg):
    def flash_on():
        display_board(msg)
        time.sleep(0.4)
    
    def flash_off():
        display_board()
        time.sleep(0.2)
    
    for i in range(0,6):
        if i % 2 == 1:
            flash_on()
        else:
            flash_off()

def prompt_play_again():
    valid_choices = ['y', 'n']
    msg_txt = [*outcome, "Would you like to play again?"]
    help_txt = "Enter 'y' to play again, 'n' to quit"
    choice = prompt_valid_input(valid_choices, msg_txt, help_txt, delay=0.5)
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
    column = int(column); row = int(row)
    board[row][column] = symbol

def return_computer_choice(valid_choices):
    # randomly choose among valid choices
    choice = random.choice(valid_choices)
    return choice

def delay_short():
    time.sleep(0.25)

def  test_for_winner():
    '''
    Return = winner
    '''
    # compare each winning board to the current board
    # and create a set of   
    for scenario in WINNING_SCENARIOS_VISUAL:
        board_results = analyze_board(scenario)
        for key, value in board_results.items():
            if len(value) == REQUIRED_TO_WIN:
                # breakpoint()
                return key

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
        if len(taken) == ALMOST_WIN and len(empty) > 0:
            return empty[0]

def WIP_analyze_possible_moves():
    '''
    PROBLEM: 
    evaluate which moves are most advantageous from an offensive perspective
    
    EXAMPLES AND TEST CASES: 

    X _ X
    _ 0 X
    _ _ 0
    Result: Computer should play 0,1 to prevent a loss

    X _ X
    0 0 _
    _ _ _
    Result: computer should play 1,2 to win

    X 0 X
    _ 0 _
    _ X _
    Result: computer should play either 1,0 or 1,2

    DATA STRUCTURES


    ALGORITHM
    HIGH LEVEL
        V2
            1) Check for win opportunities.  If so, take em
            2) Check for loss risks.  If so, address em
            3) Otherwise, choose randomly from remaining options
                (Bonus: implement weighted evaluation of potential options)
        V1
        Input: board (global)
        Output: matrix of lists representing evaluations of each cell.  Each list
            item represents quality of move in each scenario. 
                0  =  taken
                1  =  low, human has mark on this row (computer can’t win)
                3  =  hi = two marks on a row, human doesn't have mark
                2  =  medium (all others)
                -1 =  TBD

    V3 - ELABORATING ON V2
        `about_to_win(mark)`
            - check each winning board
            - count number of 'mark' in the winning cells
            - if the `mark` occupies `THRESHOLD` cells:
                - return the empty cell(s)
            - otherwise, return None

        `computer_chooses`
        1) IF `about_to_win(computer mark)` returns a cell
            - Mark the cell
        2) ELIF `about_to_win(human_mark)` returns a cell:
            - mark that cell
        3) ELSE:
            - Choose randomly among open cells using `query_board_for_mark(' ')

        SEE FLOWCHART
    '''
    # first pass
    # for each winning scenario
        # for each cell in the scenario
            # if the cell is taken, mark it as 0, otherwise -1 (TBD)
    # second pass
    pass

def analyze_board(winning_scenario):
    analysis = {
        'human' :       set(),
        'computer' :    set(),
        'hi' :          set(),  # hi, med, low are computer priorities
        'med' :         set(),
        'low' :         set(),
        'tbd' :         set(),
    }
    # First pass of analysis
    for row_idx, row in enumerate(winning_scenario):
        for col_idx, cell in enumerate(row):
            if cell == MARKS['placeholder']:
                cell_coords = (row_idx, col_idx)
                if board[row_idx][col_idx] == MARKS['human']:
                    analysis['human'].add(cell_coords)
                elif board[row_idx][col_idx] == MARKS['computer']:
                    analysis['computer'].add(cell_coords)
                else:
                    analysis['tbd'].add(cell_coords)
    # Analyze the TBD's
    for cell in analysis['tbd']:
        # if human has a mark on the row, it's a low priority
        if len(analysis['human']) > 0:
            analysis['low'].add(cell)
        # if computer has marks, it's a high priority
        elif len(analysis['computer']) >= ALMOST_WIN:
            analysis['hi'].add(cell)
        # otherwise, it's a medium priority
        else:
            analysis['med'].add(cell)
    analysis['tbd'].clear()
    return analysis

def combine_dict_sets(dict_to_mutate, other_dict):
    '''
    Input = dicts, all values must be a single set
    '''
    for key in dict_to_mutate.keys():
        dict_to_mutate[key] |= other_dict[key]


def compare_against_all_winning_boards():
    analysis = {
        'human' :       set(),
        'computer' :    set(),
        'hi' :          set(),  # hi, med, low are computer priorities
        'med' :         set(),
        'low' :         set(),
        'tbd' :         set(),
    }
    for scenario in WINNING_SCENARIOS_VISUAL:
        board_results = analyze_board(scenario)
        for key, value in board_results.items():
            if len(value) >= ALMOST_WIN:
                combine_dict_sets(analysis, board_results)
    # breakpoint()
    return analysis

def player_chooses():
    help_text = f'''Where would you like your {MARKS["human"]}? \
Format = <Column,Row>. Example '2,2' for bottom-right.'''
    msg_text = ['Your turn!']
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
    
    if test_for_winner() == 'human':
        mutate_outcome('Human wins! 💃')
        return
    if test_for_winner() == 'computer':
        mutate_outcome('You lose ☹️')
        return
    if not valid_choices:
        mutate_outcome("It's a tie! 😬")
        return
    # Else
    mutate_outcome('undecided')

# ****************************************************************************
# SETUP
# ****************************************************************************

winning_scenarios = []
for scenario in WINNING_SCENARIOS_VISUAL:
    winning_scenarios.append(
        return_all_locations_for_mark(scenario, MARKS['placeholder']))

# ****************************************************************************
# TESTING
# ****************************************************************************

if True:
    board = [
    ['0', 'X', 'X'],
    ['0', ' ', 'X'],
    ['0', ' ', ' '],
    ]
    #print(compare_against_all_winning_boards())
    #print(test_for_winner())
    # print(return_all_locations_for_mark(board, ' '))
    # print(winning_scenarios)
    print(about_to_win('X'))
    breakpoint()

# ****************************************************************************
# MAIN LOOP
# ****************************************************************************


board = reset_board()
outcome = ['undecided']
valid_choices = []
update_valid_choices()
celebrate("Are you ready to rumble???")

while True:
    player_chooses()
    update_outcome()
    
    if outcome == ['undecided']:
        computer_chooses()
        update_outcome()
    else:
        celebrate(outcome)
        prompt_play_again()

    if outcome == ['play_again']:
        board = reset_board()
        update_valid_choices()
        display_board()
