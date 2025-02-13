/*
P
  Input = integer `nStars`
  Output = nums and stars
    - number of characters = integer
    - 
E
D
A
  - for each num between 1 and `nStars`
    - print a line consisting of `countUpTo` output and `*'.repeat(`num`) output
      - ex: '1****', '12***'
    - 
*/

function countUpTo(max) {
  let str = '1';
  for (let i = 2; i <= max; i++) {
    str += String(i);
  }
  return str;
}

function generatePattern(nStars) {
  for (let i = 1; i <= nStars; i++) {
    console.log(countUpTo(i) + '*'.repeat(nStars - i))
  }
}

// console.log(countUpTo(5))
// generatePattern(7);
generatePattern(9);