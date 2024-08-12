class TTTGame:
    def __init__(self):
        self.board = Board()
    
    def play(self):
        # SPIKE
        self.display_welcome_message()

        while True:
            self.board.display()

            self.first_player_moves()
            if self.is_game_over():
                break
            self.second_player_moves()
            if self.is_game_over():
                break

            break # for testing purposes
        
        self.board.display()
        self.display_results()
        self.display_goodbye_message()

    def display_welcome_message(self):
        print("Welcome to Tic Tac Toe!")

    def display_goodbye_message(self):
        print("Goodbye!")

    def display_results(self):
        # STUB
        # show results: win/lose/tie
        pass

    def first_player_moves(self):
        # STUB
        pass

    def second_player_moves(self):
        # STUB
        # Second player makes a move
        pass

    def is_game_over(self):
        # STUB
        # for now, assume game is never ends
        return False


    

class Board:
    def __init__(self):
        self.squares = {
            1: Square(),
            2: Square('X'),
            3: Square(),
            4: Square('O'),
            5: Square(),
            6: Square(),
            7: Square(),
            8: Square(),
            9: Square(),
        }
    
    def display(self):
        print()
        print("     |     |     ")
        print(f"  {self.squares[1]}  |"
              f"  {self.squares[2]}  |"
              f"  {self.squares[3]}  ")
        print("     |     |     ")
        print("-----+-----+-----")
        print("     |     |     ")
        print(f"  {self.squares[4]}  |"
              f"  {self.squares[5]}  |"
              f"  {self.squares[6]}  ")
        print("     |     |     ")
        print("-----+-----+-----")
        print("     |     |     ")
        print(f"  {self.squares[7]}  |"
              f"  {self.squares[8]}  |"
              f"  {self.squares[9]}  ")
        print("     |     |     ")
        print()

class Row:
    def __init__(self):
        pass
    '''
    
    '''

class Square:
    def __init__(self, marker=' '):
        self.marker = marker
    
    def __str__(self):
        return self.marker

class Marker:
    def __init__(self):
        pass
    '''
    
    '''

class Player:
    def __init__(self):
        pass
    '''
    
    '''

class Human(Player):
    def __init__(self):
        pass
    '''
    
    '''
    def play(self):
        pass

    def mark(self):
        pass

class Computer(Player):
    def __init__(self):
        pass
    '''
    
    '''

game = TTTGame()
game.play()