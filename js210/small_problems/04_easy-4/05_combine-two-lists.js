/*
P
  INPUT = two arrays
  RETURN = new array = alternates elements from the first and second list
E
D
A
*/

// TESTS
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


// MY SOLUTION
/* 
  - `newArray` = []
  - for each index between 0 and the last index (length minus 1)
    - Append element at index onto newArray (use Push)
  - return array


*/

function interleave(...arrays) {
  let newArray = [];
  for (let i = 0; i < arrays[0].length; i++) {
    for (let arr of arrays) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

