"use strict";

class Game {

  static MAX_GUESS = 100;
  static MIN_GUESS = 1;
  static SUCCESS = 0;
  static TOO_HIGH = 1;
  static TOO_LOW = -1;
  static INVALID = 'invalid';

  static randomIntInclusive(low, high) {
    // returns random integer, inclusive of `low` and high` args
    if (typeof low !== 'number' || typeof high !== 'number') {
      throw new Error("Only numbers are allowed.")
    }
    let nums = [low, high].sort((a,b) => a - b);
    low = nums[0]
    high = nums[1]
    return Math.floor(Math.random() * (high - low + 1) + low)
  }

  constructor({guessBox, guessButton, messageDisplay}) {
    messageDisplay.textContent = "Guess a number from 1 to 100"
    guessBox.autocomplete = "off";
    guessButton.removeAttribute("disabled");

    this.guessCount = 0;
    this.secretNumber = Game.randomIntInclusive(Game.MIN_GUESS, Game.MAX_GUESS);
    this.gameOver = false;
    this.guessBox = guessBox;
    this.guessButton = guessButton;
    this.messageDisplay = messageDisplay;
    this.resetGuessBox();
    console.log(`NEW GAME! Secret number = ${this.secretNumber}.`)
  }


  resetGuessBox() {
    this.guessBox.value = "";
    this.guessBox.focus();
  }

  handleGuessClick() {
    let result = this.checkGuess(this.guessBox.value);

    if (result === Game.SUCCESS) {
      this.messageDisplay.textContent = `Wow! ${this.guessCount} guesses and you win!`
      this.guessButton.setAttribute("disabled", "")
    } else if (result === Game.TOO_LOW) {
      this.messageDisplay.textContent = 'Too low.  Try again...'
    } else if (result === Game.TOO_HIGH) {
      this.messageDisplay.textContent = 'Too high.  Try again...'
    } else if (result === Game.INVALID) {
      this.messageDisplay.textContent = "Invalid input: please provide a number between 1 and 100, inclusive."
      this.guessBox.select();
    } else {
      throw new Error("Unexpected value for 'result'")
    }
  }

  checkGuess(guess) {
    guess = Number(guess);
    console.log(`guess = ${guess}`)

    if (
      (!Number.isInteger(guess)) ||
      guess < Game.MIN_GUESS ||
      guess > Game.MAX_GUESS
      ) {
        return Game.INVALID;
    }

    this.guessCount += 1;

    if (guess === this.secretNumber) {
      this.gameOver = true;
      return Game.SUCCESS;
    } else if (guess > this.secretNumber) {
      this.resetGuessBox();
      return Game.TOO_HIGH;
    } else {
      this.resetGuessBox();
      return Game.TOO_LOW;
    }
  }
}


// EVENTS & GAMEPLAY
document.addEventListener("DOMContentLoaded", (e) => {

  const messageDisplay = document.querySelector("#message");
  const guessBox = document.querySelector("#guessBox");
  const guessButton = document.querySelector("#guessButton");
  const newGameButton = document.querySelector("#newGame");
  
  let game = new Game({guessBox, guessButton, messageDisplay});

  guessButton.addEventListener("click", (e) => {
    e.preventDefault();
    game.handleGuessClick();
  });

  newGameButton.addEventListener("click", (e) => {
    e.preventDefault();
    game = new Game({guessBox, guessButton, messageDisplay});
  });
});
