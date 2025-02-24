/*
P
  INPUT = two integers
    - First arg = `count`
    - Second arg = starting number of the sequence that you should create
  RETURN = array
    - length of array = `count` (first arg)
    - each element = multiple of the starting number
  REQS
    - EXPLICIT
      - `count` is a positive integer
      - starting number = any integer
      - `count` = 0 should result in an empty array
E
D
A
*/

// TESTS
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []


// MY SOLUTION
function sequence(count, numToMultiply) {
  let multiples = [];
  let startingNum = numToMultiply;
  for (let i = 1; i <= count; i++) {
    multiples.push(i * startingNum);
  }
  return multiples;
}

