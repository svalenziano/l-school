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
  }

  checkGuess(guess) {
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

let game = new Game();

// GAMEPLAY
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("hello world!")

  let guessBox = document.querySelector("#guessBox");
  let guessButton = document.querySelector("#guessButton");

  guessButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(`guess = ${guessBox.value}`)

  })


})
