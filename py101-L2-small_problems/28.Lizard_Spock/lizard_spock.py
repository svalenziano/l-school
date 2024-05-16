import random
import os
import time

MSG_WELCOME = '''\
THIS IS ROCK, PAPER, SCISSORS, LIZARD, SPOCK!

Welcome, contestants! IT'S 🕴️ vs 🖥️ !!!
[dramatic and slightly ominous music]

RULES:
Scissors cuts paper, decapitates lizard.
Paper covers rock, disproves spock.
Rock crushes lizard, crushes scissors.
Lizard poisons spock, eats Paper.
Spock smashes scissors, vaporizes rock.

Official rules: https://web.archive.org/web/20181217114425/\
http://www.samkass.com/theories/RPSSL.html

In-depth video tutorial: https://www.youtube.com/watch?v=x5Q6-wMx-K8
'''

# Best of 5 = 3
WIN_SCORE = 3

# Valid choices are stored as keys, Abbreviations are stored as values
VALID_CHOICES = {
    'rock' : 'r',
    'paper' : 'p',
    'scissors' : 'sc',
    'lizard' : 'l',
    'spock' : 'sp',
}

# Convert valid choices & abbrevs into flattened list
VALID_CHOICES_LIST = list(VALID_CHOICES.keys()) + list(VALID_CHOICES.values())

# Convert to string for printing
VALID_CHOICES_STR = ', '.join(VALID_CHOICES_LIST)

WHO_BEATS_WHO = {
    # winner : losers
    'scissors' : ['paper', 'lizard'],
    'paper' : ['rock', 'spock'],
    'rock' : ['lizard', 'scissors'],
    'lizard' : ['spock', 'paper'],
    'spock' : ['scissors', 'rock'],
}

# Display helpers
SCORE_JUSTIFY = 11

# Delay durations, in seconds
DELAY_SHORT = 0.25
DELAY_SUSPENSEFUL = 1

def expand_abbreviation(abbreviation):
    index = list(VALID_CHOICES.values()).index(abbreviation)
    full_name = list(VALID_CHOICES.keys())[index]
    return full_name

def print_prompt(message):
    print(f'==> {message}')

def clear_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

def return_winner(player1_choice, player2_choice):
    if player1_choice == player2_choice:
        return 0    # TIE
    losing_hands = WHO_BEATS_WHO[player1_choice]
    if player2_choice in losing_hands:
        return 1    # PLAYER 1 WINS
    return 2        # else, PLAYER 2 WINS

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
    if scores['computer'] >= WIN_SCORE:
        return 2    # Computer wins
    return None

def return_score():
    return f"You-{scores['human']} vs. Computer-{scores['computer']}"

def print_divider():
    print('*' * 79)

def print_blank_line():
    print()

def prompt_user_choice():
    # helper function: gets keyboard input, returns user choice
    print_prompt(f"Choose one: {VALID_CHOICES_STR}")
    choice = input()
    while choice.casefold() not in VALID_CHOICES_LIST:
        print_prompt('That is not a valid choice, please try again')
        choice = input()
    if len(choice) < 3:  # if it's one or two characters, it's an abbrev
        choice = expand_abbreviation(choice)
    return choice

def get_computer_choice():
    return random.choice(list(VALID_CHOICES.keys()))

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
    print_blank_line()
    print_score('SCORE:')
    print_divider()

def print_scoreboard_final():
    clear_terminal()
    print_divider()
    print_choices()
    if overall_winner == 1:
        print("RESULT: 🥳 YOU WIN BEST OF 5!")
    else:
        print("RESULT: 😟 You lose best of 5.")
    print_blank_line()
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
    print_divider()
    print(MSG_WELCOME)
    print_divider()

    scores = {'human' : 0, 'computer' : 0}

    print_prompt("Let's play best of 5... first to 3 wins!")

    while True:
        # Get choices from user & computer
        user_choice = prompt_user_choice()
        computer_choice = get_computer_choice()

        # print_choices()

        # Decide who wins/ loses

        round_winner = return_winner(user_choice, computer_choice)
        update_score(round_winner)

        # Check to see if anyone has won best of 5 and update scoreboard
        overall_winner = return_overall_winner()

        if overall_winner:
            print_scoreboard_final()
            break

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
