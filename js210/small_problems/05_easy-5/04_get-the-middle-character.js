/*
P
  input = NON EMPTY STRING
  RETURN = string = middle character of the string
    if there's an odd num of chars, return a 2-character string (the two middle chars)
E
D
A
*/

// TESTS
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"


// MY SOLUTION
/* 
P

E
  Launch -> length = 6, midpoint = 3
  
  'un' are indexes 2 and 3
  slice = [2,4] -> +/- 1 in relation to midpoint

  Launch School -> length 13, midpoint = 6.5
  slice = [6,7] -> floor/ceiling of midpoint
D
A
  

*/
function centerOf(string) {
  let midpoint = string.length / 2;
  if (string.length % 2 === 0) {
    return string.slice(midpoint - 1, midpoint + 1);
  } else {
    return string.slice(Math.floor(midpoint), Math.ceil(midpoint));
  }
}

