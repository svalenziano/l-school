import random
import os
import time

# Best of 5 = 3
WIN_SCORE = 3

VALID_CHOICES = ['rock', 'paper', 'scissors','lizard','spock',
                 'r', 'p', 'sc','l', 'sp']

WINNING_HANDS = [
    # scissors cuts paper, decapitates lizard
    ('scissors', 'paper'), ('scissors', 'lizard'),
    # paper covers rock, disproves spock
    ('paper', 'rock'), ('paper', 'spock'),
    # rock crushes lizard, crushes scissors
    ('rock', 'lizard'), ('rock', 'scissors'),
    # lizard poisons spock, eats Paper
    ('lizard', 'spock'), ('lizard', 'paper'),
    # spock smashes scissors, vaporizes rock
    ('spock', 'scissors'), ('spock', 'rock'),
    ]

# Display helpers
SCORE_JUSTIFY = 15

# Delay durations, in seconds
DELAY_SHORT = 0.25
DELAY_SUSPENSEFUL = 1

def expand_abbreviation(abbreviation):
    match abbreviation:
        case 'r':
            return 'rock'
        case 'p':
            return 'paper'
        case 'sc':
            return 'scissors'
        case 'l':
            return 'lizard'
        case 'sp':
            return 'spock'

def print_prompt(message):
    print(f'==> {message}')

def clear_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

def return_winner(player1_choice, player2_choice):
    if player1_choice == player2_choice:
        return 0    # TIE
    if (player1_choice, player2_choice) in WINNING_HANDS:
        return 1    # PLAYER 1 WINS
    return 2        # PLAYER 2 WINS

def print_winner(result_code):
    match result_code:
        case 0:
            print("RESULT: 😬 It's a tie! ")
        case 1:
            print("RESULT: 🙂 You win this round! ")
        case 2:
            print("RESULT: ☹️ You lose this round! ")

def return_overall_winner():
    if scores['human'] >= WIN_SCORE:
        return 1    # Human wins
    elif scores['computer'] >= WIN_SCORE:
        return 2    # Computer wins


def return_score():
    return f"You-{scores['human']} vs. Computer-{scores['computer']}"

def print_divider():
    print('*' * 79)

'''
CODE REVIEW:
Is this print_blank() function best practice?  My intent is to make the
code easier to read, though I realize maybe I'm going too far?
'''
def print_blank():
    print()

def prompt_user_choice():
    # helper function: returns user choice
    print_prompt(f"Choose one: {', '.join(VALID_CHOICES)}")
    user_choice = input()

    while user_choice.casefold() not in VALID_CHOICES:
        print_prompt('That is not a valid choice, please try again')
        user_choice = input()

    if len(user_choice) < 3:
        user_choice = expand_abbreviation(user_choice)

    return user_choice

def get_computer_choice():
        # Generate computer choice using 'random'
        # Only use first 5 choices (Rock ==> Spock),
        # don't use abbreviations (r ==> sp)
        return random.choice(VALID_CHOICES[0:4])

def print_choices():
        time.sleep(DELAY_SHORT)
        clear_terminal()
        print_divider()
        print_prompt(
            f'You chose {user_choice}, the computer chose {computer_choice}.')
        time.sleep(DELAY_SUSPENSEFUL)

def print_score(header_string):
    print(header_string)
    print('You'.ljust(SCORE_JUSTIFY),      scores['human'])
    print('Computer'.ljust(SCORE_JUSTIFY), scores['computer'])

def print_scoreboard_standard():
    clear_terminal()
    print_divider()
    print_choices()
    print_winner(round_winner)
    print_blank()
    print_score('SCORE')
    print_divider()

def print_scoreboard_final():
    clear_terminal()
    print_divider()
    print_choices()
    if overall_winner == 1:
        print("RESULT: 🥳 YOU WIN BEST OF 5!")
    else:
        print("RESULT: 😟 You lose best of 5.")
    print_blank()
    print_score('FINAL SCORE')
    print_divider()
    if overall_winner == 1:
        print_prompt("CONGRATULATIONS!  Your skills are impressive! 🥲")
    else:
        print_prompt("WHAT A SAD DAY.  You were beaten by a computer. ☹️")

def update_score(winner):
    match winner:
        case 1:
            scores['human'] += 1
        case 2:
            scores['computer'] += 1

# MAIN LOOP
while True:
    clear_terminal()
    print_prompt("Welcome, contestants! 🕴️ vs 🖥️")

    scores = {'human' : 0, 'computer' : 0}
    overall_winner = None

    print_prompt("Let's play best of 5... first to 3 wins!")

    while True:
        round_winner = None
        
        # Get choices from user & computer
        user_choice = prompt_user_choice()
        computer_choice = get_computer_choice()
        
        # print_choices()
        
        # Decide who wins/ loses
        round_winner = return_winner(user_choice, computer_choice)
        update_score(round_winner)

        # Check to see if anyone has won best of 5
        overall_winner = return_overall_winner()
        
        if overall_winner:
            print_scoreboard_final()
            break
        else:
            print_scoreboard_standard()

    # Continue or no?
    print_prompt("Again? (y/n)")
    play_again = input()

    while play_again.casefold() not in ['y','n', '']:
        print_prompt("Invalid value, say again? Please enter 'y' or 'n'")
        play_again = input()

    if play_again == 'n':
        break

# EXIT MESSAGE
print_prompt(random.choice(["Goodbye! 🙂",
                     'Good riddance! 🙂', 'Fare thee well! 🙂']))
