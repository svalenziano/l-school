import random

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

def determine_winner(player1_choice, player2_choice):
    if player1_choice == player2_choice:
        return 0
    elif (player1_choice, player2_choice) in WINNING_HANDS:
        return 1
    else:
        return 2

def print_prompt(message):
    print(f'==> {message}')

keep_going = True

while keep_going:
    print_prompt(f"Choose one: {', '.join(VALID_CHOICES)}")
    user_choice = input()

    while user_choice.casefold() not in VALID_CHOICES:
        print_prompt('That is not a valid choice, please try again')
        user_choice = input()

    match user_choice:
        case 'r':
            user_choice = 'rock'
        case 'p':
            user_choice = 'paper'
        case 'sc':
            user_choice = 'scissors'
        case 'l':
            user_choice = 'lizard'
        case 'sp':
            user_choice = 'spock'

    # Generate computer choice using 'random'
    # Don't use abbreviations
    computer_choice = random.choice(VALID_CHOICES[0:4])   

    print_prompt(f'You chose {user_choice}, the computer chose {computer_choice}.')

    # Decide who wins/ loses

    match determine_winner(user_choice, computer_choice):
        case 0:
            print_prompt("It's a tie!")
        case 1:
            print_prompt("You win!")
        case 2:
            print_prompt("You lose :(")
    

    # Continue or no?
    print_prompt("Again? (y/n)")
    play_again = input()
    
    while play_again.casefold() not in ['y','n', '']:
        print_prompt("Invalid value, say again? Please enter 'y' or 'n'")
        play_again = input()
    
    if play_again == 'n':
        keep_going = False

print(random.choice(["Goodbye!", 'Good riddance!', 'Fare thee well!']))
# output results

# ask to play again