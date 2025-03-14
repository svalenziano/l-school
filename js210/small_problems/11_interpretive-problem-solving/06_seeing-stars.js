"use strict";

/*
P
  Write a function that displays an 8-pointed star in an n x n grid where n is an odd integer
  Rules:
    - n is odd
    - smallest allowable value of `n` is 7
E
  star(7);
  // logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

  star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

D
A
*/

// TESTS



// MY SOLUTION

/* 
P
===========================================
  Write a function that displays an 8-pointed star in an n x n grid where n is an odd integer
  iNPUT = odd integer
  OUTPUT = printed star
  RETURN = none
  SIDE EFFECTS = none
  
  Rules:
    - rules for `n`
      - n is odd
      - smallest allowable value of `n` is 7
    - Height AND width = n
    - middle row = `n` stars
    - All other rows have 3 stars
    - Top is mirror-image of bottom
    - Spacing between stars:
      - Inner spacing: num spaces === "distal index" (moving away from center row)
      - Outer spacing: maxDistalIndex - distalIndex


E
===========================================
star(7)                   maxDistalIndex = 2
*--*--* 0   *--*--* 2     2 -2 = 0
-*-*-*- 1   -*-*-*- 1     2 - 1 = 1
--***-- 2   --***-- 0     2 - 0 = 2
******* 3
--***-- 4
-*-*-*- 5
*--*--* 6

midpoint = (7-1) / 2 = 3
                           Outer spacing:
*---*---* 0   *---*---* 3   3 - 3 = 0
 *  *--*  1   -*--*--*- 2   3 - 2 = 1
  * *-*   2   --*-*-*-- 1   3 - 1 = 2
   ***    3   ---***--- 0   3 - 0 = 3
********* 4
   ***    5
  * * *   6
 *  *  *  7
*   *   * 8


D
===========================================
Array of strings

A
===========================================
- midpoint = (`n` - 1) / 2
- maxDistalIndex = midpoint - 1
- bottomHalf = []
- create bottom half starting from center and moving outwards
  - for each index between 0 and maxDistalIndex (inclusive):
    - outerSpacing = maxDistalIndex - index
    - innerSpacing = index
    - bottomhalf.push (makeArm(outerSpacing, InnerSpacing)) HELPER
- topHalf = bottomHalf reversed (make copy)
- centerBar = * repeated `n` times
- result = topHalf + centerBar + bottomHalf
- print each line of result

makeArm (HELPER)
- return (
        ' ' * outerSpacing + 
        '*' + 
        ' ' * innerSpacing
        '*' +
        ' ' * innerSpacing
        '*' +
        ' ' * outerspacing
        )
- Return string
*/

function star(n) {
  if (n % 2 === 0 || n < 7) {
    console.log("Error! Argument must be odd integer.")
    console.log();
    return
  }
  const midpoint = (n - 1) / 2;
  const maxDistalIndex = midpoint - 1;
  // create bottom half
  const bottomHalf = [];
  for (let idx = 0; idx <= maxDistalIndex; idx++) {
    const outerSpacing = maxDistalIndex - idx;
    bottomHalf.push(makeArm(outerSpacing, idx))
  }
  let result = bottomHalf
    .toReversed()
    .concat('*'.repeat(n))
    .concat(bottomHalf)
  result.forEach((line) => console.log(line))
  console.log();
}

star(6);
star(7);
star(9);
star(15);

function makeArm(outerSpacing, innerSpacing) {
  return (
    ' '.repeat(outerSpacing) +
    '*' +
    ' '.repeat(innerSpacing) +
    '*' +
    ' '.repeat(innerSpacing) +
    '*' +
    ' '.repeat(outerSpacing)
  )
}

// console.log(makeArm(3, 2))
// console.log(makeArm(4, 1))
// console.log(makeArm(5, 0))