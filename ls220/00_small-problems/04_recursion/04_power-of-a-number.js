
        
        
        
/*
P
//////////////////////////////////////////////////////
Input = 'x' base number and 'n' exponent
Return = base number raised to the power of the exponent
Rules = 
  - use recursion
  - exponent always a positive number


console.log(power(2, 3) === 8);
console.log(power(5, 0) === 1);
console.log(power(3, 4) === 81);
console.log(power(7, 2) === 49);
console.log(power(10, 1) === 10);

// All test cases should log true.

E
//////////////////////////////////////////////////////
My examples & tests:
*/


/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
- base case = 0th power -> 1
- recursive def: the nth "power of a number" is the number multiplied by the "'n-1th' power of the number"

*/

// LS TESTS
console.log(power(2, 3) === 8);
console.log(power(5, 0) === 1);
console.log(power(3, 4) === 81);
console.log(power(7, 2) === 49);
console.log(power(10, 1) === 10);

// All test cases should log true.



function power(x, n) {
  if (n === 0) return 1;
  return x * power(x, n-1);
}


