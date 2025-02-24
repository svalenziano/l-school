/*
P
  INPUT = array of integers
  OUTPUT = number, 3 decimals. 
    - Number represents the 'multiplicative average': 
        multiply integers, then divide by number of integers
E
D
A
*/

// TESTS
console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"


// MY SOLUTION
/* 
P
E
D
A
  - sum = product of all elements (use reduce)
  - divide sum by number of elements
  - Use Number.prototype.toFixed(2)
*/
function showMultiplicativeAverage(array) {
  let product = array.reduce((accum, num) => (accum || 1) * num);
  let average = product / array.length;
  return average.toFixed(3)
}

