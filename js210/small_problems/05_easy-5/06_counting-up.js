/*
P
  input = integer
  return = array with all integers btw 1 and the integer, inclusive
E
D
A
*/

// TESTS
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]


// MY SOLUTION
function sequence(integer) {
  let integers = [];
  for (let i = 1; i <= integer; i++) {
    integers.push(i)
  }
  return integers;
}

