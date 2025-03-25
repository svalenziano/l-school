console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]


/*
P
INPUT = TWO non-empty arrays
RETURN = ARRAY OF PRODUCTS OF ALL POSSIBLE COMBINATIONS BETWEEN THE FIRST AND SECOND ARRAYS  
RULES
  - create empty `products` array to hold results  
  - for every num in the first array
      - append the product of `num` and every num in the second array
  - return a flattened array
E
D
A
  Map each number into a list of products
  - flatten that list
  - use flatMap ?

*/

function multiplyAllPairs(arr1, arr2) {
  return arr1.flatMap((i) => arr2.map((j) => j * i), 1).sort((a,b) => a - b)
}