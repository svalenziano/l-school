/*
P
  Input = array
  Return = array.  Each member is a running total of the elements to that point
  
E
D
A
*/

// TESTS
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []


// MY SOLUTION


/* 
Algo
  - total = []
  - for each endIdx:
    - create slice of the array up to that `endIdx` (inclusive)
    - `sum` = sum of all numbers in the array (using `filter`)
    - append (push) `sum` to the `total` array
  - return `total` array
*/

function runningTotal(array) {
  let totals = [];
  for (let endIdx = 1; endIdx <= array.length; endIdx++) {
    let numbersToSum = array.slice(0, endIdx);
    totals.push(numbersToSum.reduce((accum, num) => accum + num))
  }
  return totals
}