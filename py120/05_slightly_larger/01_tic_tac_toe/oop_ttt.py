class TTTGame:
    def __init__(self):
        self.board = Board()
        self.human = Human()
        self.computer = Computer()
    
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
        move = self.human.get_move()
        self.board.mark_square(move, Square.HUMAN_MARKER)

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
        self.squares = {num: Square()
                        for num in range(1, 10)}
    
    def mark_square(self, location, mark):
        self.squares[location].mark = mark

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
    INITIAL_MARKER = ' '
    HUMAN_MARKER = 'X'
    COMPUTER_MARKER = '0'

    def __init__(self, marker=INITIAL_MARKER):
        self.marker = marker
    
    def __str__(self):
        return self.marker
    
    @property
    def mark(self):
        return self._mark
    
    @mark.setter
    def mark(self, mark):
        self._mark = mark

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
    def get_move(self):
        '''
        `Board.valid_moves` = Determine what moves are valid
        Get square number from human (ensure validity)
        Update Board
        '''
        move = input("What's your move? ")
        try:
            move = int(move)
            if not 1 <= move <= 9:
                raise ValueError("Move must be between 1 and 9, inclusive.")
            return move
        except ValueError as e:
            print(f"Oops! {e}")
        print("Sorry, that's an invalid choice.")
        print()

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