/*
P
  Write a function that takes a 'sentence string' arg and returns a reformatted string, each 'number word' replaced with a numeral.
E
D
A
*/

// TESTS
// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === "Please call me at 5 5 5 1 2 3 4. Thanks.");
// "Please call me at 5 5 5 1 2 3 4. Thanks."


// MY SOLUTION

/*
P
  - There will always be spaces between the period of one sentence and the 
E
  - 
D
list of tokens  (string split into tokens)
  - word
  - number word
  - number (numeric word)
  - punctuation
  - whitespace

numberWords:
  'zero',
  'one',
  'two',
  'three',
  ...

A
- split string into tokens using .match(regex) : Use regex to match words, numbers, punctuation, or whitespace
- MAP (process the tokens)
  - if numberWords includes the LOWERCASED token:
    - return the index of the token within numberWords
        Example: numberWords.indexOf('two') === 2
  - else:
    - return the token (unchanged)
- return a string (join the list with '' separator)

*/

// console.log(wordToDigit('') === '');
console.log(wordToDigit('One') === '1');
console.log(wordToDigit('1') === '1');
console.log(wordToDigit('One 2 Three.') === '1 2 3.');
console.log(wordToDigit('One') === '1');
console.log(wordToDigit('one.') === '1.');
console.log(wordToDigit('One. Two') === '1. 2');  
console.log(wordToDigit('one?') === '1?');
console.log(wordToDigit('ONE!') === '1!');
console.log(wordToDigit('One day, I went a-walking two the library.') === '1 day, I went a-walking 2 the library.');
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === "Please call me at 5 5 5 1 2 3 4. Thanks.");


function convertWord(numberString) {
  // returns numeral (string)
  numberWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  lower = numberString.toLowerCase();
  if (numberWords.includes(lower)) {
    return numberWords.indexOf(lower);
  } else {
    return numberString;
  }
}

function wordToDigit(str) {
  let tokensPattern = /[a-z]+|[.!?,:;\-\+]+|[0-9]+|[\s]/gi
  let words = str.match(tokensPattern).map(convertWord).join('');
  return words;
}

// console.log(convertWord('zero'))
// console.log(convertWord('one'))
// console.log(convertWord('two'))
// console.log(convertWord('three'))
// console.log(convertWord('nine'))
// console.log(convertWord('ten'))

// REGEX TESTS
// let x = ("Please call me at five five five one two three four. Thanks."
//   .match(/[a-z]+|[.!?,:;]+|[0-9]+|[\s]/gi));
// console.log(x.join(''))