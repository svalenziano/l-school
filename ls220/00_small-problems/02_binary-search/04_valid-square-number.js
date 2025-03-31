
        
        
        
/*
P
//////////////////////////////////////////////////////
input = positive integer `num`
return = `true` if `num` is a 'square integer' - one whose square root is an integer

rules:
  - you cannot use the built-in Math library

LS tests:
  console.log(isSquareInteger(1) === true);
  console.log(isSquareInteger(4) === true);
  console.log(isSquareInteger(16) === true);
  console.log(isSquareInteger(14) === false);
  console.log(isSquareInteger(25) === true);
  console.log(isSquareInteger(26) === false);

// All test cases should log true.

E
//////////////////////////////////////////////////////
My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
Use binary search to search between 1 and the number:
  Criteria: number * number = `num`

  If square is equal to `num`, return true
  If square is too small, move window right
  If square is too large, move window left
  return false

*/

function isSquareInteger(num) {
  let left = 1;
  let right = num;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}


// LS TESTS
console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.


