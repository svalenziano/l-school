import random

VALID_CHOICES = ['rock', 'paper', 'scissors', 'r', 'p', 's']


def print_winner(human_choice, computer_choice):
    match (human_choice, computer_choice):
        case ('rock', 'scissors') | ('paper', 'rock') | ('scissors', 'paper'):
            print_prompt('You win!!!')
        case ('rock', 'paper') | ('paper', 'scissors') | ('scissors', 'rock'):
            print_prompt("OMG you lose, I'm so sorry.")
        case _:
            print_prompt("It's a tie!")

def print_prompt(message):
    print(f'==> {message}')

keep_going = True

while keep_going:
    print_prompt(f"Choose one: {', '.join(VALID_CHOICES)}")
    choice = input()

    while choice.casefold() not in VALID_CHOICES:
        print_prompt('That is not a valid choice, please try again')
        choice = input()

    match choice:
        case 'r':
            choice = 'rock'
        case 'p':
            choice = 'paper'
        case 's':
            choice = 'scissors'

    # generate computer choice using 'random'

    computer_choice = random.choice(['rock', 'paper', 'scissors'])

    print(f'''
             You chose: {choice}
    The computer chose: {computer_choice}
    ''')

    # Decide who wins/ loses

    print_winner(choice, computer_choice)

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