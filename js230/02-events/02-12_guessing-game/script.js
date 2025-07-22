"use strict";

const SUCCESS = 0;
const TOO_HIGH = 1;
const TOO_LOW = -1;

class Game {
  

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

  constructor() {
    this.guessCount = 0;
    this.secretNumber = Game.randomIntInclusive(1, 100);
    this.gameOver = false;
    this.guessBox = document.querySelector("#guessBox");
    this.guessButton = document.querySelector("#guessButton");
    this.messageDisplay = document.querySelector("#message");
    console.log(`NEW GAME! Secret number = ${this.secretNumber}.`)
  }


  handleGuessClick() {
    let result = this.checkGuess(this.guessBox.value);
    if (result === 0) {
      this.messageDisplay.textContent = `Wow! ${this.guessCount} guesses and you win!`
    } else if (result === -1) {
      this.messageDisplay.textContent = 'Too low.  Try again...'
    } else {
      this.messageDisplay.textContent = 'Too high.  Try again...'
    }
  }

  checkGuess(guess) {
    guess = Number(guess);
    this.guessCount += 1;
    if (guess === this.secretNumber) {
      this.gameOver = true;
      return SUCCESS;
    } else if (guess > this.secretNumber) {
      return TOO_HIGH;
    } else {
      return TOO_LOW;
    }
  }
}


// EVENTS & GAMEPLAY
document.addEventListener("DOMContentLoaded", (e) => {
  let game = new Game();


  guessButton.addEventListener("click", (e) => {
    e.preventDefault();
    game.handleGuessClick();
  })
})
