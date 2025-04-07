
        
        
        
/*
P
//////////////////////////////////////////////////////
Input = integer
Return = number of digits
Rules = 
  - Use recursion
  - Don't use length property
  - Don't convert to string

Hint: divide by 10

console.log(countDigits(12345) === 5);
console.log(countDigits(7) === 1);
console.log(countDigits(100000) === 6);
console.log(countDigits(99999) === 5);
console.log(countDigits(0) === 1);

// All test cases should log true.

E
//////////////////////////////////////////////////////
My examples & tests:

123
  Math.floor 123 / 10 = 12
  Math.floor 12 / 10 = 1

*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
v1
  base case: value is between 9 and 0 (inclusive) -> return 1
  recursive definition: The number of digits is 1 plus "the number of digits in 'the floor of the number / 10'"


*/

// LS TESTS
console.log(countDigits(12345) === 5);
console.log(countDigits(7) === 1);
console.log(countDigits(100000) === 6);
console.log(countDigits(99999) === 5);
console.log(countDigits(0) === 1);

// All test cases should log true.

function countDigits(num) {
  if (num <= 9 && num >= 0) {
    return 1;
  }
  return 1 + countDigits(Math.floor(num / 10))
}



