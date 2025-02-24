/*
P
  - INPUT = positive integer
  - OUTPUT = integer - the input integer with its digits reversed
E
D
A
*/

// TESTS
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1


// MY SOLUTION
/* 
  - convert to array of characters (strings)
  - reverse the array
  - join bakc into string
  - use parseInt(10) to convert into integer 
      (radix = 10 to avoid octal coercion) to convert into integer
  - return integer
*/
function reverseNumber(integerToReverse) {
  let chars = String(integerToReverse).split('').toReversed();
  let newString = chars.join('');
  return Number.parseInt(newString, 10)
}

