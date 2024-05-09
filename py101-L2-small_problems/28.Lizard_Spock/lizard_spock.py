"""
See also: 
    PY101.2.28 Lizard Spock Flowchart.excalidraw
"""

import random

VALID_CHOICES = ['rock', 'paper', 'scissors','lizard','spock',
                 'r', 'p', 'sc','l', 'sp']

WINNING_HANDS = [
    # CODE REVIEW: This data structure isn't quite as efficient as the solution
    # provided by Launch School, but is it still a good solution?

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

def return_winner(player1_choice, player2_choice):
    if player1_choice == player2_choice:
        return 0    # TIE
    if (player1_choice, player2_choice) in WINNING_HANDS:
        return 1    # PLAYER 1 WINS
    return 2    # PLAYER 2 WINS

def print_winner(result_code):
    match result_code:
        case 0:
            print_prompt("It's a tie! 😑")
        case 1:
            print_prompt("You win this round! 🙂")
        case 2:
            print_prompt("You lose this round! ☹️")

def return_score(user_score, computer_score):
    return f"You-{user_score} vs. Computer-{computer_score}"

def print_divider():
    print_prompt('*' * 79)

def play_best_of_5():
    '''
    CODE REVIEW: Was it a good decision to break out this function?
    I thought it would be easier to read than nested 'while True' loops
    '''
    user_score = 0
    computer_score = 0
    
    print_prompt("Let's play best of 5... first to 3 wins!")
    
    while True:
        print_divider()
        print_prompt(f"Choose one: {', '.join(VALID_CHOICES)}")
        user_choice = input()

        while user_choice.casefold() not in VALID_CHOICES:
            print_prompt('That is not a valid choice, please try again')
            user_choice = input()

        if len(user_choice) < 3:
            user_choice = expand_abbreviation(user_choice)

        # Generate computer choice using 'random'
        # Only use first 5 choices (Rock ==> Spock),
        # don't use abbreviations (r ==> sp)
        computer_choice = random.choice(VALID_CHOICES[0:4])

        print_prompt(
            f'You chose {user_choice}, the computer chose {computer_choice}.')

        # Decide who wins/ loses
        result = return_winner(user_choice, computer_choice)
        print_winner(result)

        # Update scores
        match result:
            case 1:
                user_score += 1
            case 2:
                computer_score += 1

        # Print updated scores
        print_prompt(f"Current Score: {return_score(user_score, computer_score)}")

        # If someone's scored 3 (best of 5), print final score, then exit loop
        if user_score >= 3:
            print_divider()
            print_prompt("CONGRATULATIONS!  Your skills are impressive! 🥲")
            print_prompt(f"Final score: {return_score(user_score, computer_score)}")
            break
        if computer_score >= 3:
            print_divider()
            print_prompt("WHAT A SAD DAY.  You were beaten by the computer. ☹️")
            print_prompt(f"Final score: {return_score(user_score, computer_score)}")
            break


# MAIN LOOP
while True:
    print_prompt("Welcome, contestants! 🤖 vs 🖥️")
    play_best_of_5()

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
