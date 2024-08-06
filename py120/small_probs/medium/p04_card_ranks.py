'''
P
    - Modify class so that tests print True
    - If tie, return either card, doesn't matter which
E
D
    State
    - LIST = self.value = convert rank to numeric value
    Behaviors
    - rank_to_value
V
A

'''


class Card:
    def __init__(self, rank, suit):
        self.rank = rank
        self.suit = suit