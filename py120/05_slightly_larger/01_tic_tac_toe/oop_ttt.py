class TTTGame:
    def __init__(self):
        pass
    
    def play(self):
        # SPIKE
        self.display_welcome_message()

        while True:
            self.display_board()

            self.first_player_moves()
            if self.is_game_over():
                break
            self.second_player_moves()
            if self.is_game_over():
                break
        
        self.display_board()
        self.display_results()
        self.display_goodbye_message()

    def display_welcome_message(self):
        # STUB
        # show a welcome message
        pass

    def display_goodbye_message(self):
        # STUB
        pass

    def display_results(self):
        # STUB
        # show results: win/lose/tie
        pass

    def display_board(self):
        # STUB
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
        pass
    '''
    
    '''

class Row:
    def __init__(self):
        pass
    '''
    
    '''

class Square:
    def __init__(self):
        pass
    '''
    
    '''

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