/*
P
E
D
A
*/

// TESTS
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"


// MY SOLUTION

/* 
P
E
D
A
 - CHECK FOR INVALID
 - check for equilateral
 - check for isoceles
 - return 'scalene'

*/

function triangle(s1, s2, s3) {
  if ([s1, s2, s3].includes(0) || s1 + s2 <= s3 || s1 + s3 <= s2 || s2 + s3 <= s1) {
    return 'invalid';
  } else if (s1 === s2 && s2 === s3) {
    return 'equilateral';
  } else if (s1 === s2 || s1 === s3 || s2 === s3) {
    return 'isoceles';
  } else {
    return 'scalene';
  }
}

