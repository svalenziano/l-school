/*
Rot13
For each letter:
  - If char is in English alphabet, change it to char 13 positions later
    - wrap around to beginning if the end of alphabet is reached
  - Preserve case (A -> N and a -> n)
  - Don't modify chars that aren't letters (numbers, punctuation, etc)
*/

/*
P
E
D
  - There are two ranges of chars:
    - uppercase = 'A'.charCodeAt() to 'Z'.charCodeAt()
    - lowercase = 'a'.charCodeAt() to 'z'.charCodeAt()
A
  - v1 HIGH LEVEL
  - result = ''
  - for each char:
    - if char is alphabetic
      - perform transformation and append onto `result`
    - else:
      - append char (no transformation)
  
  v1 LOW LEVEL
  - result = ''
  - for each char:
    - if char is lowercase letter:
      - perform rotation
    - else if char is uppercase letter
      -perform rotation
    - else:
      - append char (no transformation)
  ROT_13_HELPER (helper)
    - Performs rotation, no validation
    - Inputs: min, max, character
    - Output: character
    - Algo
      - Add 13
      - if greater than max:
        - subtract (max - min)
*/

// MY SOLUTION

// Code Point Constants
const CP_UPPER_A = 'A'.charCodeAt(0);
const CP_UPPER_Z = 'Z'.charCodeAt(0);
const CP_LOWER_A = 'a'.charCodeAt(0);
const CP_LOWER_Z = 'z'.charCodeAt(0);

function rot_13_character(minCodePoint, maxCodePoint, character) {
  let codePoint = character.charCodeAt(0);
  codePoint += 13
  if (codePoint > maxCodePoint) {
    codePoint -= (maxCodePoint - minCodePoint) + 1
  }
  return String.fromCharCode(codePoint)
}

function isAlphabetic(character) {
  if (character.length > 1) {
    return null;
  }
  let codePoint = character.charCodeAt();
  return codePoint >= CP_UPPER_A && codePoint <= CP_LOWER_Z;
}

// let tests = ['a', 'b', 'c', 'z', 'Z', 'X', 'A', '1', '%', 'awef3231awfAA'];
// for (let test of tests) {
//   console.log(isAlphabetic(test))
// }

function isLowercase(string) {
  return string === string.toLowerCase();
}

function isUppercase(string) {
  return string === string.toUpperCase();
}


// console.log(isLowercase('a'));
// console.log(isLowercase('o'));
// console.log(isLowercase('1'));
// console.log(isLowercase('a'));

function rot13(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx]
    if (isAlphabetic(char)) {
      if (isLowercase(char)) {
        result += rot_13_character(CP_LOWER_A, CP_LOWER_Z, char);
      } else {
        result += rot_13_character(CP_UPPER_A, CP_UPPER_Z, char);
      }
    } else {
      result += char;
    }
  }
  return result;
}

// console.log(rot_13_character(CP_LOWER_A, CP_LOWER_Z, 'a'))
// console.log(rot_13_character(CP_LOWER_A, CP_LOWER_Z, 'n'))
// console.log(rot_13_character(CP_LOWER_A, CP_LOWER_Z, (rot_13_character(CP_LOWER_A, CP_LOWER_Z, 'n'))))
// // console.log(rot_13_character('A'))
// // console.log(rot_13_character('N'))
// console.log(rot_13_character(CP_UPPER_A, CP_UPPER_Z, 'A'))
// console.log(rot_13_character(CP_UPPER_A, CP_UPPER_Z, 'N'))



// EXAMPLES
console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.

// TESTS
let test1 = 'Teachers open the door, but you must enter by yourself.';
let solution1 = 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.';
console.log(rot13(test1) === solution1);
console.log(rot13(rot13(test1)) === test1);

