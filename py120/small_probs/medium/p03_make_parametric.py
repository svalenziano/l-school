from random import randint
import math

class GuessingGame:
    
    
    def __init__(self, min_guess, max_guess):
        self._min_guess = min_guess
        self._max_guess = max_guess
        self._turns_remaining = int(math.log2(max_guess - min_guess + 1)) + 1
        self._target = randint(self._min_guess, self._max_guess)
    
    def print_turns_remaining(self):
        print(f"\nYou have {self._turns_remaining} guesses remaining.")
    
    def is_valid(self, guess):
        if (guess < self._min_guess) or (guess > self._max_guess):
            return False
        return True
    
    def handle_invalid_guess(self, guess):
        INVALID_MSG = (f"Invalid guess. " +
                   f"Enter a number between {self._min_guess} " + 
                   f"and {self._max_guess}: ")
        while not self.is_valid(guess):
            guess = int(input(INVALID_MSG))
        return guess

    def prompt_guess(self):
        guess = input(f"Enter a number between {self._min_guess} " +
                     f"and {self._max_guess}: ")
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
                
game = GuessingGame(0, 1000)
game.play()                

