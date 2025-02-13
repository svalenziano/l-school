// Write a function logMultiples that takes one argument number. It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.

// You may assume that number is an integer between 0 and 100.

logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// output (3x and 1x)
// 63
// 21

/*
P
E
D
A
C
*/

function findMultipleLessThan(num, ceiling) {
  // start at ceiling, subtract one until multiple is found
  for (let i=ceiling; i>=num; i--) {
    if (i % num === 0) {
      return i
    }
  }
}

function logMultiples(num) {
  start = findMultipleLessThan(num, 100);
  for (let i=start; i>=num; i-=num) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
  console.log();
}

// console.log(findMultipleLessThan(17, 100))