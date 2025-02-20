
// tests
console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811


// MY SOLUTION
/* 
P
E
D
A
  - sum = 0
  - for each char:
    - get UTF value, add to sum
  - return sum

 */

function utf16Value(string) {
  let sum = 0;
  for (let char of string) {
    sum += char.charCodeAt();
  }
  return sum
}