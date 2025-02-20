/* 
P
   Input = nested array of ints
   Output = array of sums
   
E
D
A
  - result = []
  - for each subArray in arr:
    - calc the sum (using reduce) and append to result
 */

function matrixSums(arr) {
  let result = [];
  for (let subArray of arr) {
    result.push(subArray.reduce((accum, num) => accum + num))
  }
  return result
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]