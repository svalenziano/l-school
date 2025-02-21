/* 
EXPECTED = return product of sum of two arrays of numbers

Actual result?
*/



function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  sum;
}

console.log(productOfSums([1,2,3], [4,5,6]))

// My solve
/* 

`total` function has no return value.  Returns `undefined`

Result will always be NaN

*/

// functioning function
function total(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  return sum;
}