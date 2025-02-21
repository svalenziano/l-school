// Convert signed num to string without using ANY built-in coercion features



// tests
console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"



// my solve
/* 
P
E
D
A
  if num less than zero:
    - update num to absolute value (deal w pos nums only, from now on)
    - let string = ''
    - while num is greater than 10:
      - pop off rightmost digit using modulo and array lookup w 'digits' array
        - append to string
      - update num using Math.floor(num / 10)
    - return remaining digit (converted) + string
*/

function convert(digit) {
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return digits[digit];
}

function getLeftmostDigits(int) {
  return Math.floor(int / 10);
}

// returns STRING
function getRightmostDigit(int) {
  return convert(int % 10);
}

function signedIntegerToString(int) {
  let sign = ''
  if (int < 0) {
    sign = '-';
    int = Math.abs(int);
  } else if (int > 0) {
    sign = '+';
  }
  let string = '';
  while (int > 10) {
    string = getRightmostDigit(int) + string
    int = getLeftmostDigits(int)
  }
  return sign + getRightmostDigit(int) + string
}