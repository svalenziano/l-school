import random
import os

class DisplayMixin:
    @staticmethod
    def clear_screen():
        os.system('clear')

class TTTGame():

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
        self.board.clear_and_display()
        self.display_welcome_message()

        while True:
            self.first_player_moves()
            if self.is_game_over():
                break
            self.second_player_moves()
            if self.is_game_over():
                break
            self.board.clear_and_display()

        self.board.clear_and_display()
        self.display_results()
        self.display_goodbye_message()

    def display_welcome_message(self):
        print("Welcome to Tic Tac Toe!")

    def display_goodbye_message(self):
        print("Goodbye!")
        print()
        print()

    def display_results(self):
        if self.is_winner(self.human):
            print('Congrats, you won! 😃')
        if self.is_winner(self.computer):
            print('Sadness. You were beaten by the computer ☹️')

    def first_player_moves(self):
        empty = self.board.unused_squares
        move = self.human.get_move(empty)
        self.board.mark_square(move, self.human.marker)

    def second_player_moves(self):
        options = self.board.unused_squares
        move = self.computer.get_move(options)
        self.board.mark_square(move, self.computer.marker)

    def is_game_over(self):
        return self.board.is_full or self.someone_won

    @property
    def someone_won(self):
        if self.is_winner(self.human) or self.is_winner(self.computer):
            return True
        return False

    def is_winner(self, player):
        for row in self.POSSIBLE_WINNING_ROWS:
            if self.x_in_a_row(player.marker, row, self.REQUIRED_TO_WIN):
                return True
        return False

    def x_in_a_row(self, mark, row, qty:int):
        if self.board.count_markers(mark, row) == qty:
            return True
        return False

class Board(DisplayMixin):
    def __init__(self):
        self.squares = {num: Square()
                        for num in range(1, 10)}

    def mark_square(self, location, mark):
        self.squares[location].mark = mark

    def prepopulate_test(self):
        self.squares = {
            1: Square('X'),
            2: Square('X'),
            3: Square('X'),
            4: Square(),
            5: Square(),
            6: Square(),
            7: Square(),
            8: Square(),
            9: Square(),
        }

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
        return len(locations_with_mark)

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

    def clear_and_display(self):
        self.clear_screen()
        self.display()


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
                return move
            except ValueError as e:
                print(f"Oops! {e}")
            print("Sorry, that's an invalid choice.")
            print()

class Computer(Player):

    def get_move(self, options):
        choice = random.choice(options)
        return choice

game = TTTGame()
# game.board.prepopulate_test()
#game.board.display()
#print(game.is_game_over())
game.play()