import os
import random
from valid_input import Input

class Player:

    CHOICES = ('rock', 'paper', 'scissors')

    def __init__(self):
        self.move = None

class Computer(Player):

    def choose(self):
        self.move = random.choice(Human.CHOICES)

class Human(Player):

    def choose(self):
        help_txt = 'You need help.  The valid choices are: R, P, or S'
        move = Input(valid_choices = ['rock', 'paper', 'scissors'],
                    msg_txt = 'Please choose: rock, paper, or scissors? ',
                    invalid_txt = 'Not valid, sorry!',
                    help_txt = help_txt,
                    delay = 0
                    )
        self.move = move.get()

class RPSGame:

    WIN_AND_LOSE = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper',
    }

    OUTCOME_MESSAGES = {
        ('rock', 'scissors') :  'Rock smashes scissors',
        ('paper', 'rock') :     'Paper smothers rock',
        ('scissors', 'paper'):  'Scissors cuts paper',
    }


    def __init__(self):
        self._human = Human()
        self._computer = Computer()

    @classmethod
    def clear_terminal(cls):
        os.system('cls' if os.name=='nt' else 'clear')

    def _display_welcome_message(self):
        print('Welcome to rock, paper scissors!')

    def _display_goodbye_message(self):
        print("Goodbye! 👋")

    def _return_winner(self):
        if self._human.move == self._computer.move:
            return "It's a tie!"
        for winner, loser in self.WIN_AND_LOSE.items():
            if (winner == self._human.move and
            loser == self._computer.move):
                return 'Human wins!'
        return 'Computer wins!'

    def _return_outcome_explanation(self):
        for combo, explanation in self.OUTCOME_MESSAGES.items():
            if set(combo) == set([self._human.move, self._computer.move]):
                return explanation
        return None

    def display_winner(self):
        print(f"Human chose {self._human.move}, " +
              f"Computer chose {self._computer.move}")
        explain = self._return_outcome_explanation()
        if explain:
            print(explain)
        print(self._return_winner())

    def _prompt_play_again(self):
        response = Input(
                valid_choices=['yes', 'no'],
                msg_txt='Would you like to play again? (y/n) ',
                invalid_txt='Invalid input. ',
                help_txt="Would you like to play again? The only valid " +
                        "options are 'yes' and 'no'. ",
                delay=0)
        if response.get() == 'yes':
            return True
        return False

    def play(self):
        RPSGame.clear_terminal()
        self._display_welcome_message()
        while True:
            self._human.choose()
            self._computer.choose()
            self.display_winner()
            if not self._prompt_play_again():
                break
        self._display_goodbye_message()

RPSGame().play()