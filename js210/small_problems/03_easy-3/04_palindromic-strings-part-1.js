/*
P
  Write function that returns true if string is palindrom, otherwise false
E
D
A
*/

// TESTS
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true


// MY SOLUTION
/* 
 - create new string in reverse order
  - convert to array using split
  - reverse the array
  - join into string
  - compare
- return boolean

*/

function isPalindrome(string) {
  let reversed = ((string.split('').reverse())).join('');
  return string === reversed
}