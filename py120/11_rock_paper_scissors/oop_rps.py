class Player:
    def __init__(self):
        # maybe a "name"? what about a "move"?
        pass

    def choose(self):
        pass

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
    def __init__(self):
        self._human = Player()
        self._computer = Player()

    def display_welcome_message(self):
        print('Welcome to rock, paper scissors!')

    def display_goodbye_message(self):
        print("Goodbye!")

    def display_winner(sef):
        pass    

    def play(self):
        self.display_welcome_message()
        self._human.choose()
        self._computer.choose()
        self.display_winner()
        self.display_goodbye_message()