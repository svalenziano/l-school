/* 
P
  INPUT = sorted array of integers
  OUTPUT = sorted array of integers that are 'missing' from the input array
E
D
A

 */


 // tests
missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []


// my solve
/* 
ALGO
  V1 HIGH LEVEL
  -result = []
  - create range of ints between minimum and maximum
  - for each int in that range, determine if the int is missing from the input array
  - append to result
  - return result

  V2 HIGH LEVEL
  -  = arr[0]
  - 

 */

function range(start, end) {
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function missing(arr) {
  let missingInts = []
  let complete = range(Math.min(...arr), Math.max(...arr) + 1);
  for (let num of complete) {
    if (arr.indexOf(num) === -1) {
      missingInts.push(num);
    }
  }
  console.log(missingInts)
  return missingInts;
}