import random

class TTTGame:
    def __init__(self):
        self.board = Board()
        self.human = Human('X')
        self.computer = Computer('0')
    
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
        empty = self.board.unused_squares
        move = self.human.get_move(empty)
        self.board.mark_square(move, self.human.marker)

    def second_player_moves(self):
        options = self.board.unused_squares
        move = self.computer.get_move(options)
        self.board.mark_square(move, self.computer.marker)

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

    @property
    def unused_squares(self):
        '''
        input = self
        output = list of unused indexes
        create list of unused squares
        '''
        return [key
                for key, square in self.squares.items()
                if square.is_empty]

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
    # HUMAN_MARKER = 'X'
    # COMPUTER_MARKER = '0'

    def __init__(self, marker=INITIAL_MARKER):
        self.mark = marker
    
    def __str__(self):
        return self.mark
    
    @property
    def mark(self):
        return self._mark
    
    @mark.setter
    def mark(self, mark):
        self._mark = mark

    @property
    def is_empty(self):
        return self.mark == self.INITIAL_MARKER

class Player:
    def __init__(self, marker):
        self.marker = marker
    
    @property
    def marker(self):
        return self._marker
    
    @marker.setter
    def marker(self, marker):
        self._marker = marker

class Human(Player):
    def __init__(self, marker):
        super().__init__(marker)

    def get_move(self, options):
        '''
        `Board.valid_moves` = Determine what moves are valid
        Get square number from human (ensure validity)
        Update Board
        '''
        
        while True:
            try:
                move = input(f"What's your move? Options: {options} ")
                move = int(move)
                if not move in options:
                    raise ValueError(f"Valid choices: {options}")
                else:
                    return move
            except ValueError as e:
                print(f"Oops! {e}")
            print("Sorry, that's an invalid choice.")
            print()

class Computer(Player):
    def __init__(self, marker):
        super().__init__(marker)

    def get_move(self, options):
        choice = random.choice(options)
        return choice

game = TTTGame()
game.play()