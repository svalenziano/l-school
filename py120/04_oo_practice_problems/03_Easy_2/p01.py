class Game:
    def play(self):
        return 'Start the game!'

class Bingo(Game):
    pass

g = Bingo()
print(g.play())