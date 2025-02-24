/*
P
  INPUT = array
  output = two arrays
    - If even num of elements = array lengths are symettrical
    - If odd num of elements = first array length is one longer than 2nd array length
E
D
A
*/

// TESTS
console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]


// MY SOLUTION
/* 

E
  

  [1,5,2,4,3]  -> length = 5, midpoint = 2.5
  [1,5,2], [4,3] -> slices [0:3] & [3:]
                        [0:Math.ceil(midpoint)] & [Math.ceil(midpoint):]
  [1,2,3,4]  -> length = 4, midpoint = 2

ALGO
  - if length is even
    - make and return the two arrays
  - if length is odd:
    - get midpoint
    - make and return two arrays (using slice, see slices above)
*/

function halvsies(array) {
  let midpoint = array.length / 2;
  return [array.slice(0, Math.ceil(midpoint)), array.slice(Math.ceil(midpoint))];
}

