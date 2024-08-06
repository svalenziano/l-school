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
        - find index of `rank` in lookup list
        - return that index
    - __lt__
    - __gt__
    - __str__
V
A

'''


class Card:
    
    VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
    
    def __init__(self, rank, suit):
        self.rank = rank
        self.suit = suit
        self._value = self.rank_to_value(rank)

    def rank_to_value(self, rank):
        for idx, value in enumerate(Card.VALUES, start=2):
            if rank == value:
                return idx
    
    def __lt__(self, other):
        return self._value < other._value
    
    # def __gt__(self, other):
    #     return self._value > other._value
    
    def __repr__(self):
        print("Boop")

    def __str__(self):
        return f"{self.rank} of {self.suit}"
    
    def __eq__(self, other):
        return (self.rank == other.rank) and (self.suit == other.suit)
    

# LS TESTS
cards = [Card(2, 'Hearts'),
         Card(10, 'Diamonds'),
         Card('Ace', 'Clubs')]
print(min(cards) == Card(2, 'Hearts'))             # True
print(max(cards) == Card('Ace', 'Clubs'))          # True
print(str(min(cards)) == "2 of Hearts")            # True
print(str(max(cards)) == "Ace of Clubs")           # True

cards = [Card(5, 'Hearts')]
print(min(cards) == Card(5, 'Hearts'))             # True
print(max(cards) == Card(5, 'Hearts'))             # True
print(str(Card(5, 'Hearts')) == "5 of Hearts")     # True

cards = [Card(4, 'Hearts'),
         Card(4, 'Diamonds'),
         Card(10, 'Clubs')]
print(min(cards).rank == 4)                        # True
print(max(cards) == Card(10, 'Clubs'))             # True
print(str(Card(10, 'Clubs')) == "10 of Clubs")     # True

cards = [Card(7, 'Diamonds'),
         Card('Jack', 'Diamonds'),
         Card('Jack', 'Spades')]
print(min(cards) == Card(7, 'Diamonds'))           # True
print(max(cards).rank == 'Jack')                   # True
print(str(Card(7, 'Diamonds')) == "7 of Diamonds") # True

cards = [Card(8, 'Diamonds'),
         Card(8, 'Clubs'),
         Card(8, 'Spades')]
print(min(cards).rank == 8)                        # True
print(max(cards).rank == 8)                        # True
        
