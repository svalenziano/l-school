"use strict";

class Game {
  static words = ['apple', 'banana', 'orange', 'pear'];
  static maxIncorrectGuesses = 6;

  constructor() {
    this.incorrectGuesses = 0;
    this.lettersGuessed = [];
    this.word = Game.getRandomWord();

    if (!this.word) {
      throw new Error('Out of words!');
    }

    this.word = this.word.split("");
    this.spaces = Array(this.word.length).fill(' ');
  }

  static getRandomWord() {
    if (Game.words.length === 0) return undefined;
    const wordIndex = Math.floor(Math.random() * Game.words.length);
    return Game.words.splice(wordIndex, 1)[0];
  }

  static notALetter(letter) {
    if (letter.length !== 1) return true;
    return letter.toLowerCase() < 'a' || letter.toLowerCase() > 'z';
  }

  makeGuess(letter) {
    letter = letter.toLowerCase();
    if (Game.notALetter(letter)) return;
    if (this.lettersGuessed.includes(letter)) return;

    if (this.word.includes(letter)) {
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === letter) {
          this.spaces[i] = letter;
        }
      }
    } else {
      this.incorrectGuesses += 1;
    }

    this.lettersGuessed.push(letter);
  }

  hasWon() { return this.spaces.join('') === this.word.join('') }
  hasLost() { return this.incorrectGuesses >= Game.maxIncorrectGuesses }

  showState() {
    let state = `
      word:   ${this.word}
      spaces: ${this.spaces}
      incorrectGuesses: ${this.incorrectGuesses}
      lettersGuessed: ${this.lettersGuessed}
      hasWon: ${this.hasWon()}
      hasLost: ${this.hasLost()}
    `;
    console.log(state);
  }
}

class UI {
  constructor(game) {
    this.game = game;
    this.guessCount = 0;
    this.maxGuessCount = Game.maxGuessCount;
    
    for (let id of ['tree', 'apples', 'message', 'spaces', 'guesses']){
      this[id] = document.getElementById(id);
    }
  }

  removeSpans(parentElement) {
    for (let spanNode of parentElement.querySelectorAll("span")) {
      spanNode.remove();
    }
  }

  addSpan(parentElement, text) {
    const s = document.createElement("SPAN");
    s.textContent = text;
    parentElement.appendChild(s);
  }

  updateSpaces() {
    this.removeSpans(this.spaces);  // start with a clean slate
    this.game.spaces.forEach((letter) => this.addSpan(this.spaces, letter));
  }

  updateGuesses() {
    this.removeSpans(this.guesses);
    this.game.lettersGuessed.forEach((letter) => {
      this.addSpan(this.guesses, letter);
    });
  }

  updateTree(incorrectGuessQty) {
    if (incorrectGuessQty === 0) return;

    if (incorrectGuessQty >= this.maxGuessCount) {
      this.apples.classList = ['guess_6'];
      return;
    }

    this.apples.classList = [`guess_${incorrectGuessQty}`];
  }
}

// EVENTS and logic

const game = new Game();

document.addEventListener("DOMContentLoaded", () => {

  const ui = new UI(game);
  console.log(game.word.join(""))

  document.addEventListener("keyup", (e) => {
    if (Game.notALetter(e.key)) return;

    
    game.makeGuess(e.key);
    ui.updateSpaces();
    ui.updateGuesses();
    ui.updateTree(game.incorrectGuesses);

    // Lost?
    // Display "You're out of guesses"
    // Disallow input
    // Display "play again" text
    console.log(game.showState());
  })
})

function displayWord(letters) {
  for (let l of letters) {

  }
}