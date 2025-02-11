/*
convert to ASCII code point
create array of equivalents

Keep track of 10's place and multiply, adding to result:
  4321
  4 * 1
  3 * 10
  2 * 100
  1 * 1000
  for each digit, multiply it by (10 ** num_places), then add to results
*/

function stringToInteger(str) {
  let nums = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  }
  digits = str.split('').reverse()
  let result = 0;
  let multiply = 1;
  for (let digit of digits) {
    result += multiply * digit;
    multiply *= 10;
  }
  return result
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570