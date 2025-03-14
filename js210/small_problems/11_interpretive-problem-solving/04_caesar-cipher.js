/*
P
Implement a function that uses a caesar cipher algorithm to produce an encrypted string, given the following inputs: string to be encrypted, and offset amount (integer).
E
D
A
*/

// LS TESTS
// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"


// MY SOLUTION
/* 
P
//////////////////////////////////////////////////////////////////////
Write a function that encrypts a string using the ceasar cipher algorithm
INPUT = STRING & Offset distance (integer)
OUTPUT = ENCRYPTED STRING
RETURN = ENCRYPTED STRING
SIDE EFF = NONE

Rules
  - Offset must be positive
  - Wrap around to beginning if you go beyond the end of the alphabet
  - Don't modify non-alphabetic chars
  - Retain case (upper -> upper, lower -> lower)
  - Offset may be longer than the alphabet
  - Alphabet is 26 characters long


E
//////////////////////////////////////////////////////////////////////
*/
caesarEncrypt('', 6); // ''
caesarEncrypt('a abc', 1);       // b bcd
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

/*


D
//////////////////////////////////////////////////////////////////////
string ?


A
//////////////////////////////////////////////////////////////////////
wrapAround HELPER
  - input: 
      min value
      max value
      start
      offset
  - Algo:
    - `diff` = max - min;
    - `result` = start + offset
    - while `result` > max:
      - result -= diff
    - return result

isAlphaLowerCase ()

MAIN FUNCTION
  - get constants for:
    - upper A
    - upper Z
    - lower a
    - lower z
  - `chars` = split `str` into array of chars:
    - MAP:
      if char is lowercaseAlpha (/[a-z]/.test(char)):
        - return: use wrapAround to get new character
          - min, max, char.charCodeAt(0), offset
      if char is uppercaseAlpha:
        - ditto
      else:
        - return character (no transformation)
  - return array, joined into string
 */

 function wrapAround(min, max, start, offset) {
  let diff = max - min + 1;
  let result = start + offset;
  while (result > max) {
    result -= diff;
  }
  // console.log(result)
  return result
 }


// wrapAround(1, 10, 9, 2);  // 1  (9 + 2 = 11 - 10 = 1)
// wrapAround(1, 10, 9, 3);  // 2
// wrapAround(1, 10, 9, 10);  // 9
// wrapAround(1, 10, 9, 20);  // 9


function caesarEncrypt(string, offset) {
  let CODE_UPPER_A = 'A'.charCodeAt(0);
  let CODE_UPPER_Z = 'Z'.charCodeAt(0);
  let CODE_LOWER_A = 'a'.charCodeAt(0);
  let CODE_LOWER_Z = 'z'.charCodeAt(0);
  let chars = string.split('');
  let encrypted = chars.map((char) => {
    // HANDLE LOWERCASE CHARS
    if (/[a-z]/.test(char)) {
      return String.fromCharCode(
        wrapAround(
          CODE_LOWER_A, 
          CODE_LOWER_Z, 
          char.charCodeAt(0),
          offset,
        ));
    // HANDLE UPPERCASE CHARS
    } else if (/[A-Z]/.test(char)) {
      return String.fromCharCode(
        wrapAround(
          CODE_UPPER_A, 
          CODE_UPPER_Z, 
          char.charCodeAt(0),
          offset,
        ));
    }
    // ALL OTHER CHARS PASS THRU WITHOUT TRANSFORMATION
    return char;
  })
  let result = encrypted.join('')
  console.log(result)
  return result;
}