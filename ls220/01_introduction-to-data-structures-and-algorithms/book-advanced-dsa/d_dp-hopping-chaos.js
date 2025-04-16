// A puppy named Chaos is eager to reach a bowl of
// treats at the top of a series of n stacks of
// crates. Each stack is higher by one crate than
// the previous one, forming a structure similar
// to stairs. Each time, Chaos can hop either one
// stack or two stacks upward in his excitement. In
// how many distinct ways can Chaos reach the bowl?

// Write a function `hoppingChaos` that, given a
// number `N` as the input, determines the number
// of distinct ways Chaos can reach the bowl.

// The minimum amount of stacks is one, and the maximum is 50.

// Example 1:

    // Input: 2
    // Output: 2

    // Chaos can reach the top of the stack in two distinct ways:

    // 1. Hop 1 stack, then hop 1 more stack.
    // 2. Hop 2 stacks in one go.

// Example 2:

    // Input: 4
    // Output: 5

    // Chaos can reach the top of the stack in five distinct ways:

    // 1. Hop 1 stack, hop 1 stack, hop 1 stack, then hop 1 stack.
    // 2. Hop 1 stack, hop 1 stack, then hop 2 stacks in one go.
    // 3. Hop 1 stack, then hop 2 stacks in one go, then hop 1 stack.
    // 4. Hop 2 stacks in one go, hop 1 stack, then hop 1 stack.
    // 5. Hop 2 stacks in one go, then hop 2 stacks in one go again.

function hoppingChaos(n) {
  // implementation
}


console.log(hoppingChaos(2) === 2);
console.log(hoppingChaos(3) === 3);
console.log(hoppingChaos(4) === 5);
console.log(hoppingChaos(8) === 34);
console.log(hoppingChaos(13) === 377);
console.log(hoppingChaos(17) === 2584);
console.log(hoppingChaos(21) === 17711);
console.log(hoppingChaos(50) === 20365011074);
// All test cases should log true.

// sv tests
// console.log(hoppingChaos(2));  // === 2);
// console.log(hoppingChaos(3));  // === 3);
// console.log(hoppingChaos(4));  // === 5);
// console.log(hoppingChaos(8));  // === 34);
// console.log(hoppingChaos(13));  // === 377);
// console.log(hoppingChaos(17));  // === 2584);
// console.log(hoppingChaos(21));  // === 17711);
// console.log(hoppingChaos(50));  // === 20365011074);



/* 
MY SOLVE
See Obsidian for PEDAC: "### Demo: Hopping Chaos I"

*/

// RECURSIVE VERSION (NON-MEMOIZED)
// function hoppingChaos(rows) {
//   if (rows <= 2) {
//     return rows;
//   } else {
//     return hoppingChaos(rows - 1) + hoppingChaos(rows - 2);
//   }
// }

// MEMOIZED VERSION
/* 
- create cache
- call hoppingChaos
  - If rows <= 2, return rows
  - If rows -1 and rows -2 are in the cache, return the sum of those rows
  - 

  - Will there be a situation in which only one row is cached?


*/


// function hoppingChaos(rows) {
//   let cache = new Map();
//   return fibonacci(rows);

//   function fibonacci(n) {
//     if (n === 1) {
//       return 1;
//     }
//     if (n === 2) {
//       return 2
//     }
//     if (cache.has(n)) {
//       return cache.get(n);
//     }
//     let x = fibonacci(n - 1) + fibonacci(n - 2);
//     cache.set(n, x)
//     return x;
//   }
// }


// 2025-04-15 solve
/* 
base case = n <= 2, return n
recursive def = the number of hops it takes to get to the top of n stacks is the number of hops it takes to get to the top of n-1 stacks plus the num of hops it takes to get to the top of n-2 stacks

memoization = 
  - check to see if value for `n` is in the cache
  - if it isn't:
    - calc the value and store in cache (array, use `n` for index)
  - if it is:
    - return the value

*/

function hoppingChaos(rows) {
  let cache = [];
  return fib(rows);

  function fib(n) {
    if (n <= 2) {
      return n;
    }
    if (n in cache) {
      return cache[n];
    } else {
    }
    let result = fib(n - 1) + fib(n - 2)
    cache[n] = result;
    return result;
  }
}