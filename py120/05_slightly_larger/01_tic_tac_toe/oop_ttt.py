import random

class TTTGame:

    REQUIRED_TO_WIN = 3

    POSSIBLE_WINNING_ROWS = (
        (1, 2, 3),  # top row of board
        (4, 5, 6),  # center row of board
        (7, 8, 9),  # bottom row of board
        (1, 4, 7),  # left column of board
        (2, 5, 8),  # middle column of board
        (3, 6, 9),  # right column of board
        (1, 5, 9),  # diagonal: top-left to bottom-right
        (3, 5, 7),  # diagonal: top-right to bottom-left
    )

    def __init__(self):
        self.board = Board()
        self.human = Human('X')
        self.computer = Computer('0')

    @property
    def list_of_markers(self):
        return [self.human.marker, self.computer.marker]

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
        return self.board.is_full or self.someone_won()


    def someone_won(self):
        '''
        Output: has anyone gotten three in a row?
        Alg: 
            For each  winning combo
                - return True if `count markers at location` is >= 3
            Return False
        '''
        for mark in self.list_of_markers:
            for row in self.POSSIBLE_WINNING_ROWS:
                if self.board.count_markers(mark, row) == self.REQUIRED_TO_WIN:
                    return True
        return False
    

class Board:
    def __init__(self):
        self.squares = {num: Square()
                        for num in range(1, 10)}
    
    def mark_square(self, location, mark):
        self.squares[location].mark = mark

    @property
    def unused_squares(self):
        return [key
                for key, square in self.squares.items()
                if square.is_empty]

    @property
    def is_full(self):
        return len(self.unused_squares) == 0

    def square_contains_mark(self, location, mark):
        return self.squares[location].mark == mark
    
    def count_markers(self, mark, locations:tuple):
        '''
        input = mark to count, locations to check
        output = count. btw 0 and 3
        '''
        locations_with_mark = [location
                               for location in locations
                               if self.square_contains_mark(location, mark)]

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