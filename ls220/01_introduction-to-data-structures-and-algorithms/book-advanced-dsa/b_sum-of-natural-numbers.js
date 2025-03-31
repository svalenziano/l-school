/* 
P
//////////////////////////////////////////////////////
// Create a function that calculates the sum of the first `n`
// natural numbers. A natural number is a positive integer
// starting from 1. Therefore, the sum of the first `n` natural
// numbers is the sum of all integers from 1 to `n`.

// For example, if `n` is 5, the sum would be 1 + 2 + 3 + 4 + 5 == 15.

console.log(sumOfNaturalNumbers(1) === 1);
console.log(sumOfNaturalNumbers(5) === 15);
console.log(sumOfNaturalNumbers(10) === 55);
console.log(sumOfNaturalNumbers(20) === 210);
console.log(sumOfNaturalNumbers(0) === 0);

// All test cases should log true.


*/

/*
MY SOLVE
P
//////////////////////////////////////////////////////
Recursive Definition
  TRY 1
  The [sum of natural numbers] for x is
  the sum of the integer and the [sum of natural numbers]
  for x - 1

  TRY 2
  An integer is a [sum of natural numbers] if the number is equal to the argument plus the sum of the remaining natural numbers (arument - 1), as long as the argument is greater than 0.

  TRY 3
  An integer is a sum of the first `n` natural numbers if it is the sum of `n` plus the sum of the rest of the natural numbers (the sum of the first `n-1` natural numbers).
E
//////////////////////////////////////////////////////


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
- if 0:
  - return 0
- else:
  - return n + sumOfNaturalNumbers(n - 1)

*/

function sumOfNaturalNumbers(n) {
  return n === 0 ? 0 : n + sumOfNaturalNumbers(n - 1)
}


// ls TESTS

console.log(sumOfNaturalNumbers(1) === 1);
console.log(sumOfNaturalNumbers(5) === 15);
console.log(sumOfNaturalNumbers(10) === 55);
console.log(sumOfNaturalNumbers(20) === 210);
console.log(sumOfNaturalNumbers(0) === 0);