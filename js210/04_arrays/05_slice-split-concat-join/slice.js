/* 
INPUT = array, start index, end index
OUTPUT = new array, with same specs as python slice syntax
SIDE EFFECTS = none
 */

// ls tests
slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]


// my solve
function slice(array, start_idx, end_idx) {
  if (array.length === 0 || start_idx >= end_idx) {
    console.log("[]")
    return [];
  }
  let new_array = [];
  let newArrayIdx = 0;
  for (let idx = start_idx; idx < end_idx; idx++) {
    new_array[newArrayIdx] = array[idx];
    newArrayIdx += 1;
  }
  console.log(new_array);
  return new_array;
}