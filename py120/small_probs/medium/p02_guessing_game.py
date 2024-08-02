from random import randint

class GuessingGame:
    
    MIN_GUESS = 1
    MAX_GUESS = 100
    INVALID_MSG = (f"Invalid guess. " +
                   f"Enter a number between {MIN_GUESS} and {MAX_GUESS}: ")
    
    def __init__(self):
        self._turns_remaining = 7
        self._target = randint(self.MIN_GUESS, self.MAX_GUESS)
    
    def print_turns_remaining(self):
        print(f"\nYou have {self._turns_remaining} guesses remaining.")
    
    def is_valid(self, guess):
        if (guess < self.MIN_GUESS) or (guess > self.MAX_GUESS):
            return False
        return True
    
    def handle_invalid_guess(self, guess):
        while not self.is_valid(guess):
            guess = int(input(self.INVALID_MSG))
        return guess


    def prompt_guess(self):
        guess = input(f"Enter a number between {self.MIN_GUESS} " +
                     f"and {self.MAX_GUESS}: ")
        return int(guess)

    def play(self):
        while self._turns_remaining:
            self.print_turns_remaining()
            guess = self.prompt_guess()
            guess = self.handle_invalid_guess(guess)
            if guess == self._target:
                print("That's the number!" + "\n\n" + "You won!")
                return
            elif guess > self._target:
                print("Your guess is too high.")
            else:
                print("Your guess is too low.")
            self._turns_remaining -= 1
        print("\nYou have no more guesses. You lost!")
                
game = GuessingGame()
game.play()                

