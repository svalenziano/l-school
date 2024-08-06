from random import shuffle

'''
P
    - Create a deck with the 'Cards' from the previous problem
    - Deck should be shuffled when created
    - `draw` method  = deal one card
        - if deck is empty, create new set of 52 shuffled cards, deal one card
            from new cards
E
D
    - Deck
        STATE:
            - List of cards (shuffled)
            - Discard pile
        BEHAVIORS
            - __init__
            - `draw`
            - `start_over`
A
'''
# MY CODE
class Deck:
    RANKS = list(range(2, 11)) + ['Jack', 'Queen', 'King', 'Ace']
    SUITS = ['Hearts', 'Clubs', 'Diamonds', 'Spades']

    def __init__(self):
        self.cards = self.shuffled_deck()
    
    def shuffled_deck(self):
        cards = [Card(rank, suit)
                      for suit in Deck.SUITS
                      for rank in Deck.RANKS]
        shuffle(cards)
        return cards
    
    def draw(self):
        if len(self.cards) < 1:
            self.cards = self.shuffled_deck()
        return self.cards.pop()


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

    def __str__(self):
        return f"{self.rank} of {self.suit}"
    
    def __eq__(self, other):
        return (self.rank == other.rank) and (self.suit == other.suit)

# LS TESTS
deck = Deck()
drawn = []
for _ in range(52):
    drawn.append(deck.draw())

count_rank_5 = sum([1 for card in drawn if card.rank == 5])
count_hearts = sum([1 for card in drawn if card.suit == 'Hearts'])

print(count_rank_5 == 4)      # True
print(count_hearts == 13)     # True

drawn2 = []
for _ in range(52):
    drawn2.append(deck.draw())

print(drawn != drawn2)        # True (Almost always).