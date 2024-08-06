import random
from valid_input import Input


class Player:
    CHOICES = ('rock', 'paper', 'scissors')
    
    def __init__(self, is_human):
        # maybe a "name"? what about a "move"?
        self._is_human = is_human
        self.move = None

    def choose(self):
        help_txt = f'You need help.  The valid choices are: R, P, or S'
        if self._is_human:
            get_move = Input(valid_choices = ['rock', 'paper', 'scissors'], 
                      msg_txt = 'Please choose: rock, paper, or scissors? ', 
                      invalid_txt = 'Not valid, sorry!', 
                      help_txt = help_txt, 
                      delay = 0
                      )
            self.move = get_move.get()
        else:
            self.move = random.choice(Player.CHOICES)

class Move:
    def __init__(self):
        # This seems like we need something to keep track
        # of the choice... a move object can be "paper", "rock" or "scissors"
        pass

class Rule:
    def __init__(self):
        # not sure what the "state" of a rule object should be
        pass

    # not sure where "compare" goes yet
    def compare(self, move1, move2):
        pass

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
        self._human = Player(is_human=True)
        self._computer = Player(is_human=False)
        print('init!')

    def display_welcome_message(self):
        print('Welcome to rock, paper scissors!')

    def display_goodbye_message(self):
        print("Goodbye! 👋")

    def return_winner(self):
        if self._human.move == self._computer.move:
            return "It's a tie!"
        else:
            for winner, loser in self.WIN_AND_LOSE.items():
                if (winner == self._human.move and
                loser == self._computer.move):
                    return 'Human wins!'
                else:
                    return 'Computer wins!'
    
    def return_outcome_explanation(self):
        for combo in self.OUTCOME_MESSAGES.keys():
            if set(combo) == set([self._human.move, self._computer.move]):
                return self.OUTCOME_MESSAGES[combo]

    def display_winner(self):
        '''
        DS:
            winner/loser
                rock: scissors
                paper: rock
                scissors: paper
            messages ()
                (rock, scissors) : rock smashes scissors
                (paper, scissors): paper smothers scissors ...

        Alg:
            - If they're equal, it's a tie
            DETERMINE WINNER
                - for each possibility in WINNERS:
                    - If winners[human choice] == computer choice
                        - human wins
                - else:
                    computer wins
            PRINT FUN MESSAGE
                - for each tuple in messages VALUES
                    - if set(tuple) == set(computer and human choices)
                        - print the VALUE (message)
        '''
        print(f"Human chose {self._human.move}, Computer chose {self._computer.move}")
        print(self.return_outcome_explanation())
        print(self.return_winner())
        

    def play(self):
        #print(self.WINNING_HANDS['rock']['scissors'])
        self.display_welcome_message()
        self._human.choose()
        self._computer.choose()
        self.display_winner()
        self.display_goodbye_message()

game = RPSGame()
game.play()