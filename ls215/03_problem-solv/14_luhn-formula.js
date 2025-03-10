/* 
https://launchschool.com/lessons/28467827/assignments/8483efc4

P
============================================

Write a program that accepts a number (as a string) and validates that number using the Luhn formula.  Ignore non-numeric chars.

Input = numeric string
Return = boolean?
Output = none
Reqs =
  - Ignore all non-numeric chars

MORE DETAIL ON THE LUHN FORMULA:
- counting from rightmost digit and moving left (<------)
  - double the value of every second digit
  - for any digit that becomes 10 or more (after the doubling), subtract 9 from the result
    - 1111 becomes 2121 (doubling happens, but not subtraction)
    - 8763 becomes 7733
      - 2nd digit from right: 2 x 6 = 12 - 9 = 3
      - leftmost digit: 8 * 2 - 9 = 7
  - Add all these digits together to get the checksum
    - 1111 becomes 2121 (see above for logic) and sums as 2 + 1 + 2 + 1 = 6
    - 8763 becomes 7733 and 7 + 7 + 3 + 3 = 20
  - If the checksum ends in 0, then the number is valid according to the Luhn formula
    - 1111 is invalid (checksum doesn't ends with 0)
    - 8763 is valid (checksum ends with 0)

EXAMPLE:
- "2323 2005 7766 3554" is valid


MY QUESTIONS:
  - input always a string?
  - empty args?
  - too many args?
  - empty string?
  - return value is a boolean?
  - are digit indexes evaluated for 'if they are even' AFTER removing non-numeric chars?

*/



// MY TESTS
console.log(isValidLuhn("2323 2005 7766 3554") === true)
console.log(isValidLuhn("1111") === false)
  // 1212
console.log(isValidLuhn("8763") === true)

// tests from GPT-03-mini (duck.ai)
// Valid Luhn numbers:
console.log(isValidLuhn("79927398713") === true);       // Common test case: valid Luhn number
console.log(isValidLuhn("4539578763621486") === true);   // Valid Visa card number example
console.log(isValidLuhn("6011000990139424") === true);   // Valid Discover card number example
console.log(isValidLuhn("378282246310005") === true);    // Valid American Express card number example
console.log(isValidLuhn("2323 2005 7766 3554") === true); // Provided test case

// Invalid Luhn numbers:
console.log(isValidLuhn("79927398710") === false);       // Slightly altered valid test case
console.log(isValidLuhn("1234567890123456") === false);   // Random 16-digit number that doesn't pass Luhn
console.log(isValidLuhn("4111 1111 1111 1112") === false); // Altered Visa card number example
console.log(isValidLuhn("") === false);                   // Empty string should be considered invalid
console.log(isValidLuhn("abcdefg") === false);            // Non-numeric string is invalid



// MY SOLUTION


/* 


E
============================================
8763
           8763
  Indices  0123

  Reversed 3678
  Indices  0123


D
============================================



A
============================================
v1 high level
- make an array of the digits (remove non-digits, convert to integer)
- reverse the order of the digits so that you can work from the 'right to the left' 
    of the original string
- MAP:
  - if index is even
    - double the value
      - if the value is greater than 9
        - subtract 9 and return the new value
      - else
        - return the value
  - else:
    return the digit (unmodified)
- (no need to reverse the array again, since the sum of digits is not dependent on order)
- checksum = get the sum of the digits
- if checksum ends in zero (modulo 10 results in 0):
  - number is valid (return true)
else
  - number is invalid (return false)


V1 HIGH LEVEL
 */

function isValidLuhn(str) {
  let digits = str.split('').toReversed();
  digits = digits.filter((num) => /[0-9]/.test(num))
  if (digits.length > 0) {
      digits = digits.map((num) => Number.parseInt(num))
    // console.log(digits)
    digits = digits.map((num, idx) => {
      if (idx % 2 === 0) {
        return num;
      } else {
        let doubled = num * 2;
        if (doubled > 9) {
          return doubled - 9;
        } else {
          return doubled;
        }
      }
    })
    digits.reverse();
    let checksum = digits.reduce((accum, ele) => accum + ele);
    if (checksum % 10 === 0) {
      return true;
    }
  }
  return false;
}