/*
P
E
D
A
*/

// TESTS
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true


// MY SOLUTION


function isPalindromicNumber(num) {
  string = String(num);
  return string === (string.split('').reverse()).join('')
}

