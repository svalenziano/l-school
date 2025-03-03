function myReduce(array, func, initial) {
  // ...
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49



// my solve
/* 
P
  Input  = array, callback, initial value
  Return = reduced value (probably an integer or a string)
  Side effects = only those caused by the reduce function
  Requirements:
    - Use first element in the array as initial value if no `initialValue` argument is provided
    - 
E
D
A
If length of array is zero:
  return null
If length of array is one:
  return the sole element
If `initialValue` is provided:
  Accumulated value = `initialValue`
Else:
  Accumulated value = first element in the array
For each `index` between 0 and the length of the array:
  - Accum = callback(accumulated value, currentValue, index, array)
Return `accum`
*/

function myReduce(array, callback, initialValue) {
  if (array.length < 1) {
    return null;
  }
  if (array.length === 1) {
    return array[0];
  }
  let accum;
  if (initialValue !== undefined) {
    accum = initialValue;
  } else {
    array = Array.from(array);  // create shallow copy
    accum = array.shift();  // extract first element
  }
  for (let idx = 0; idx < array.length; idx += 1) {
    let element = array[idx];
    accum = callback(accum, element, idx, array);
  }
  return accum;
}
