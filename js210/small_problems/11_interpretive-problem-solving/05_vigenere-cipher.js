/*
P
Given 2 arguments `plaintext` and `keyword`, encrypt `plaintext` using the `keyword` as the shift values for a Vigenere Cipher

Shift values are denoted by the `keyword`
- Letters correspond to shift values: a = 0, z = 25
- A shift value of 'a' would mean that no shifting occurs
- A shift value of 'f' would mean that all letters are shifted by 5, as in a caesar cipher
- A shift value of 'ab' would mean that every other character is shifted by 1
- A shift value of 'abcd' would mean that every group of 4 characters is shifted by
    0, 1, 2, and then 3.  

LS example:
    plaintext: Pineapples don't go on pizzas!
    keyword: meat

    Applying the Vigenere Cipher for each alphabetic character:
    plaintext : Pine appl esdo ntgo onpi zzas
    shift     : meat meat meat meat meat meat
    ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

    result: Bmnxmtpeqw dhz'x gh ar pbldal!

RULES
  - keyword case doesn't matter (doesn't affect shift value)
  - only letters are shifted
  - Shifting amounts: a = 0, b = 1, ... , z = 25.  
  - Spaces are not accounted for when moving thru offsets
    - Offsets are consumed when 

QUESTIONS
  - keyword always alphabetic?  no non-alpha chars?
  - 

E
///////////////////////////////////////////////////////////////////////////

*/
//simple
console.log(vigenere('aaa', 'A') === 'aaa');
console.log(vigenere('aaa', 'b') === 'bbb');
console.log(vigenere('aaa', 'aaz') === 'aaz');
console.log(vigenere('aaa', 'AaZ') === 'aaz');
console.log(vigenere('aaaaa', 'az') === 'azaza');
console.log(vigenere('.&#($  ', 'azaoijwe') === '.&#($  ');

// wrap around
console.log(vigenere('zzz', 'b') === 'aaa');

// complex
console.log(vigenere('a a', 'ab') === 'a b');
console.log(vigenere('Pineapples don\'t go on pizzas!', 'meat') === 'Bmnxmtpeqw dhz\'x gh ar pbldal!');
console.log(vigenere('Pineapples don\'t go on pizzas!', 'cab') === 'Riogaqrlfu dpp\'t hq oo riabat!');
console.log(vigenere('Dog', 'Rabbit') === 'Uoh');

/*
D
///////////////////////////////////////////////////////////////////////////


A
///////////////////////////////////////////////////////////////////////////

- generate list of offsets using the keyword:
  - lowercase the string
  - split string into array
  - `offsets` = map each character to a number
    - use charCodeAt to get the charcode of the character
    - normalize by subtracting the value of 'a'.charCodeAt(0) so that a = 0 and z = 25
    - repeat to greater or equal to length of `plaintext`
- result = ''
- offsetIndex = 0
- for each index of the string:
  - if character is letter:
    - get character using index
    - get offset using offsetIndex
    - use encryptLetter to append new letter to `result`
    - increment offsetIndex
  - else:
    - append char (no transformation)
  - return string
*/


// TESTS



// MY SOLUTION

function vigenere(plaintext, keyword) {
  let offsets = keyword
    .toLowerCase()
    .repeat(Math.ceil(plaintext.length / keyword.length))
    .split('')
    .map((char) => char.charCodeAt(0) - 'a'.charCodeAt(0));
  let result = '';
  for (let i = 0; i < plaintext.length; i++) {
    let char = plaintext[i];
    if (/[a-z]/i.test(char)) {
      let offset = offsets.shift();
      result += encryptLetter(char, offset);
    } else {
      result += char;
    }
  }
  // console.log(result)
  return result;
}



function encryptLetter(char, offset) {
  // Input = character (one-letter string)
  // Output = encrypted letter or unencrypted non-letter character
  let CODE_UPPER_A = 'A'.charCodeAt(0);
  let CODE_UPPER_Z = 'Z'.charCodeAt(0);
  let CODE_LOWER_A = 'a'.charCodeAt(0);
  let CODE_LOWER_Z = 'z'.charCodeAt(0);
  let start = char.charCodeAt(0);
  if (/[a-z]/.test(char)) {
    return String.fromCharCode(rotate(CODE_LOWER_A, CODE_LOWER_Z, start, offset));
  } else if (/[A-Z]/.test(char)) {
    return String.fromCharCode(rotate(CODE_UPPER_A, CODE_UPPER_Z, start, offset));
  } else {
    return char;
  }

  function rotate(min, max, start, offset) {
      let diff = max - min + 1;
    let result = start + offset;
    while (result > max) {
      result -= diff;
    }
    // console.log(result)
    return result
    }
 }

// console.log(encryptCharacter('a', 0));
// console.log(encryptCharacter('a', 1));
// console.log(encryptCharacter('a', 25));
// console.log(encryptCharacter('a', 26));
// console.log(encryptCharacter('A', 0));
// console.log(encryptCharacter('A', 1));
// console.log(encryptCharacter('A', 25));
// console.log(encryptCharacter('A', 26));