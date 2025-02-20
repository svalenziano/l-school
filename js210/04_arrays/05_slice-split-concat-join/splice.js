/* 
Implement the native SPLICE method:

INPUT = array, start index, number of values to remove
RETURN = removed values (array)
SIDE EFFECTS = remove values from original array
*/


// tests
let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]


// my solve

function push(arr, element) {
  let lastIndex = arr.length - 1;
  arr[lastIndex + 1] = element;
  return arr.length
}

function unshift(arr, element) {
  new_arr = [element];
  for (let ele of arr) {
    new_arr.push(ele)
  }
  for (let idx in new_arr) {
    arr[idx] = new_arr[idx];
  }
  return new_arr.length;
}

/* 
P
E
  STARTING POINT / FUNCTION ARGS
  [1, 2, 3, 4, 5], remove starting at index 1, remove 2 items
  EXECUTING THE TRANSFORMATION
  [1, 4, 5, 4, 5]  -> move 4 and 5 up two positions to replace indexes 1 and 2
  [1, 4, 5]        -> truncate the array using array.length = 3
  ALGORITHM?
    - if less than startIdx:
      - do nothing
    - if greater than start idx but less than startIdx + qtyToRemove
      - append element to 'removed'
    - otherwise (beyond the segment to be removed)
      - mutate the original array (array[idx] = array[idx + qtyToRemove)])

D
A
  V1 / OBSOLETE
  - iterate through the list
  - if index is within 'removed' range
    - add to `removed` array
  - otherwise
    - original array: replace element with element from non-removed portion of array
      (item at index should be item at index + `qtyToRemove`)
  - set array length of original array to truncate the obsolete values

 */

function splice(array, startIdx, qtyToRemove) {
  let removed = [];
  let endIdx = startIdx + qtyToRemove;
  for (let i = 0; i < array.length; i++) {
    if (i >= startIdx && i < endIdx) {
      push(removed, array[i]);
    } else if (i >= endIdx) {
      array[i] = array[i + qtyToRemove];
    }
  }
  return removed;
}



/* 
LS SOLUTION

[1,2,3] -> 
 */

              // [1,2,3,4,5], 1, 2
function splice(array, begin, number) {
  let removedValues = [];
  for (let index = begin; index < array.length; index += 1) {   // index = 1 
    if (index < begin + number) {
      push(removedValues, array[index]);
    }

    array[index] = array[index + number];  // shifts the array into place!
  }

  array.length = array.length - removedValues.length;
  return removedValues;
}