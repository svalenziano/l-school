// CODE POINT CONSTANTS (CP = 'Code Point')
const CP_UPPER_A = 'A'.charCodeAt(0);
const CP_UPPER_Z = 'Z'.charCodeAt(0);
const CP_LOWER_A = 'a'.charCodeAt(0);
const CP_LOWER_Z = 'z'.charCodeAt(0);
const ROTATION_AMOUNT = 13;


// HELPER FUNCTIONS
function rot13Character(minCodePoint, maxCodePoint, character) {
  /*
  Notes:
  - rotates a single character, without validation
  - 'character' = alphabetic character
  - If the 'maxCodePoint' is exceeded, the result will 'wrap around'
    to the beginning.
  */
  let codePoint = character.charCodeAt(0);
  codePoint += ROTATION_AMOUNT;
  if (codePoint > maxCodePoint) {
    codePoint -= (maxCodePoint - minCodePoint) + 1;
  }
  return String.fromCharCode(codePoint);
}

function isAlphabetic(character) {
  // if (character.length !== 1) {
  //   return null;
  // }

  return /[a-zA-Z]/.test(character);
}

function isLowercase(character) {
  return /[a-z]/.test(character);
}

// MAIN FUNCTION
function rot13(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx++) {
    let character = string[idx];
    if (isAlphabetic(character)) {
      if (isLowercase(character)) {
        result += rot13Character(CP_LOWER_A, CP_LOWER_Z, character);
      } else {
        result += rot13Character(CP_UPPER_A, CP_UPPER_Z, character);
      }
    } else {
      result += character;
    }
  }
  return result;
}

// TESTS
let test1 = 'Teachers open the door, but you must enter by yourself.';
let solution1 = 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.';
console.log(rot13(test1) === solution1);
console.log(rot13(rot13(test1)) === test1);

let test2 = '';
let solution2 = '';
console.log(rot13(test2) === solution2);

let test3 = '12390%#!#&#abcABC';
let solution3 = '12390%#!#&#nopNOP';
console.log(rot13(test3) === solution3);