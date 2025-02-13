// Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.

// You may assume that the input is always a non-negative integer.
// Example

console.log(isPrime(1) === false);   // false
console.log(isPrime(2) === true);   // true
console.log(isPrime(3) === true);   // true
console.log(isPrime(43) === true);  // true
console.log(isPrime(55) === false);  // false
console.log(isPrime(0) === false);   // false


/*
Algo
  - Find midpoint, round down
  - For each divisor btw 2 and the midpoint
    - divide num by divisor
      - if divides evenly (remainder division === 0)
        - return false
  - return true
*/

function isPrime(num) {
  if (num === 0 || num === 1) {
    return false;
  }
  let midpoint = Math.floor(num / 2);
  for (let divisor=2; divisor <= midpoint; divisor++) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
}