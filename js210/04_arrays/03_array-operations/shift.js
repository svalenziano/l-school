/* 
[1, 2, 3] -> [2, 3]
new value of zero is 1,
new value of 1 is 2


 */


// tests
let count = [1, 2, 3];
console.log(shift(count, 0));
console.log(count);


// my solve
function shift(arr) {
  if (arr.length === 0) {
    return undefined
  }
  removedValue = arr[0];
  for (let idx = 0; idx < arr.length; idx++) {
    arr[idx] = arr[idx + 1];
  }
  arr.length = arr.length - 1;
  return removedValue;
}