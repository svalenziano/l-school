/*
P

  BONUS POINTS = ACCOMPLISH WITH A REGEX
E
D
A
*/

// TESTS
console.log(isUppercase('t'));               // false
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true


// MY SOLUTION


// function isUppercase(string) {
//   for (let char of string) {
//     if (char !== char.toUpperCase()) {
//       return false;
//     }
//   }
//   return true;
// }

function isUppercase(string) {
  return !/[a-z]/.test(string)
}