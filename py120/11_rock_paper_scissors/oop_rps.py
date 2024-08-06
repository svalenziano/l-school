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

    WINNING_HANDS = {
        # keys = winners
        'rock': {'scissors': 'Rock smashes scissors!'},
        'paper': {'rock': 'Paper smothers rock!'},
        'scissors': {'paper': 'Scissors cuts paper!'},
    }

    def __init__(self):
        self._human = Player(is_human=True)
        self._computer = Player(is_human=False)
        print('init!')

    def display_welcome_message(self):
        print('Welcome to rock, paper scissors!')

    def display_goodbye_message(self):
        print("Goodbye! 👋")

    def display_winner(self):
        '''
        DS:
            scissors : 
                paper: 'scissors cuts paper'
            rock :
                scissors: 'rock crushes scissors'
            paper :
                rock: 'paper smothers rock'
        Alg:
            - If they're equal, it's a tie
            - If the opposing move is in the value
                - player wins
            - Otherwise
                - player loses
        '''
        print(f"Human chose {self._human.move}, Computer chose {self._computer.move}")
        if self._human.move == self._computer.move:
            print(f"It's a tie!")
        else:
            outcome = self.WINNING_HANDS[self._human.move][self._computer.move]
            if self._computer.move in self.WINNING_HANDS[self._human.move]:
                print(f'{outcome} Human wins!')
            else:
                print(f'{outcome} Computer wins')
        

    def play(self):
        print(self.WINNING_HANDS['rock']['scissors'])
        # self.display_welcome_message()
        # self._human.choose()
        # self._computer.choose()
        # self.display_winner()
        # self.display_goodbye_message()

game = RPSGame()
game.play()