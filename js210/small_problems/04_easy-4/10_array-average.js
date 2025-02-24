/*
P
  INPUT = array of integers
  RETURN = avg of all integers, rounded down to 'integer component of average' (floor)
E
D
A
*/

// TESTS
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40


// MY SOLUTION
function average(arrayOfIntegers) {
  let sum = arrayOfIntegers.reduce((accum, num) => accum + num)
  let avg = sum / arrayOfIntegers.length;
  return Math.trunc(avg)
}

