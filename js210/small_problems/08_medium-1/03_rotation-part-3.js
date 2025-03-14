"use strict";
/*
P
Write a function that performs a 'full rotation' of the input integer.  
A full rotation involves:
  - rotate all but the first digit
  - rotate all but the first two digits
  - rotate all but the first 3 digits
  - and so on...
Each rotation is a rotation of one: the first digit is shifted to the end.
See tests below:

E
D
A
*/

// TESTS
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845


// MY SOLUTION
/* 
P
  Write a function that performs a 'full rotation' of the input integer.  
  A full rotation involves:
    - rotate all digits
    - rotate all but the first digit (of the new integer / string)
    - rotate all but the first two digits
    - rotate all but the first 3 digits
    - and so on...
  Each rotation is a rotation of one: the first digit is shifted to the end.

  OTHER RULES:

E
105 -> 051 -> 015 -> 15
735291 -> 352917 -> 329175 -> 321759 -> 321597 -> 321579
    "rightmost" numDigits values length -> 2

D
New string for every cycle?

A

- for every numDigits between 1) the length of the string and 2) 2 (inclusive, descending with each loop)
  - rotate the string's rightmost digits using `numDigits`
- return the integer

*/

function maxRotation(int) {
  for (let n = String(int).length; n > 1; n -= 1) {
    int = rotateRightmostDigits(int, n);
  }
  return int;
}

function rotateRightmostDigits(number, numDigits) {
  let numString = String(number);
  let splitPoint = numString.length - numDigits;
  let left = numString.slice(0, splitPoint);
  let right = numString.slice(splitPoint);
  let rotatedRight = right.slice(1) + right[0];
  return Number.parseInt(left + rotatedRight)
}