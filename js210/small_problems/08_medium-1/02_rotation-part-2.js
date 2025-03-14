/*
P
  Write a func that rotates the rightmost `n` digits
  Rotate by one digit to the left, moving first digit to the end
E
D
A
*/

// TESTS
console.log(rotateRightmostDigits(735291, 1) === 735291);      // 735291
console.log(rotateRightmostDigits(735291, 2) === 735219);      // 735219
console.log(rotateRightmostDigits(735291, 3) === 735912);      // 735912
console.log(rotateRightmostDigits(735291, 4) === 732915);      // 732915
console.log(rotateRightmostDigits(735291, 5) === 752913);      // 752913
console.log(rotateRightmostDigits(735291, 6) === 352917);      // 352917


// MY SOLUTION
/*
PROBLEM
=====================================================================
PROBLEM
INPUT
OUTPUT
QUESTIONS
  - inputs:
    - always postiive integers?
    - what if right arg is greater than num digits in left arg?
    - numDigits = number of rightmost digits to modify
  - output = integer?
RULES
  - rotation amount = 1
  - splitPoint = length minus numDigits
  - unaffected portion = slice from beginning to splitPoint
  - affected portion = slice from splitPoint to end
  - rotated integer = FOR ROTATED PORTION: slice from 1 to end, concatenated with first digit
  - output integer = unaffected portion + rotated portion
    - segment of integer to modify = right argument
    - the rest of the integer is unaffected



EXAMPLE / TEST CASES
=====================================================================
rotateRightmostDigits(735291, 1);      // 735291  no change
rotateRightmostDigits(735291, 2);      // 735219  7352 91 -> 19
rotateRightmostDigits(735291, 3);      // 735912  735 291 -> 912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
  6-5 = 1
rotateRightmostDigits(735291, 6);      // 352917  -> 352917
  352917 6, length = 6
  split point = length - numDigits  (6-6 = 0)
  left = slice(0, 0)
  right = slice(0)
*/

// uncertain?
// console.log(rotateRightmostDigits(-10, 2) === -1);  //?
// console.log(rotateRightmostDigits(10, 2) === 1);  //?

// happy path
console.log(rotateRightmostDigits(1, 1) === 1);
console.log(rotateRightmostDigits(0, 1) === 0);
console.log(rotateRightmostDigits(123, 1) === 123);
console.log(rotateRightmostDigits(123, 2) === 132);  // 1 + 23 -> 32 ... 132
console.log(rotateRightmostDigits(1234, 3) === 1342);

/*


DATA STRUCTURE
=====================================================================
Multiple Strings = allows for splitting digits, slicing


ALGORITHM
=====================================================================

MAIN ALGO
ARGS
  - number
  - numDigits
- splitPoint = length - numDigits
- left = STRING... get slice from 0 to splitPoint
- right = STRING ... get slice from splitPoint to end
- rotate the right slice
  - rotated = slice starting at 1, concatenated with first character
- return left concatenated with right AND converted back to integer

HELPER FUNCTIONS
*/
function rotateRightmostDigits(number, numDigits) {
  let numString = String(number);
  let splitPoint = numString.length - numDigits;
  let left = numString.slice(0, splitPoint);
  let right = numString.slice(splitPoint);
  let rotatedRight = right.slice(1) + right[0];
  return Number.parseInt(left + rotatedRight)
}

