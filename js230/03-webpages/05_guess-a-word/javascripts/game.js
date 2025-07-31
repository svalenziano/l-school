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
  
}

// EVENTS and logic

let game = new Game();

document.addEventListener("DOMContentLoaded", () => {

  const [
    tree, 
    apples, 
    message, 
    spaces, 
    guesses
    ] = ['tree', 'apples', 'message', 'spaces', 'guesses'].map((x) => {
      return document.getElementById(x);
    })

  document.addEventListener("keyup", (e) => {
    if (Game.notALetter(e.key)) return;
    game.makeGuess(e.key);

    /*
    Display word?
    Remove all spans
    For each letter:
      Add a new span
    */
    game.word
    game.spaces
  })
})

function displayWord(letters) {
  for (let l of letters) {

  }
}