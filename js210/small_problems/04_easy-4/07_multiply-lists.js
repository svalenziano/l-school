/*
P
  INPUT = two arrays
    Each array contains a list of numbers
  RETURN =
    new array
    product of each pair of numbers from args that have the same index
    Assumes that each arg (each array) contains the same num of leements
E
D
A
*/

// TESTS
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]


// MY SOLUTION
/* 
A
  - products = []
  - for each index:
    - for each array
      - multiply the index of the array * the num at the index in products 
          (or 1 as default value)
  - return products


*/
function multiplyList(...arrays) {
  let products = [];
  for (let i = 0; i < arrays[0].length; i++) {
    for (let array of arrays) {
      products[i] = array[i] * (products[i] || 1);
    }
  }
  return products;
}
