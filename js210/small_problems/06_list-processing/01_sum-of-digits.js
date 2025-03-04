/*
P
  input = integer
  output = sum of digits
  requirements = don't use loops.  Only use method calls.
E
D
A
*/

// TESTS
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45


// MY SOLUTION


function sum(myInt) {
  return String(myInt)
    .split('')
    .reduce((accum, ele) => accum + Number.parseInt(ele), 0)
}