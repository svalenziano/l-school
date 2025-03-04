/* 
INPUT = array of rectangles (length and width)
OUTPUT = total area covered by all rectangles
*/




let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141



/* 
MY SOLVE
P
E
D
A
  - v1 high level
    - get area of each rectangle
    - return sum of all rectangles

  - v1 low level
    - runningTotal = 0
    - for each element (two-element array) in the outer array
      - multiple first element with second element
      - add that product to the running total

*/

function totalArea(nestedArray) {
  return nestedArray.reduce((total, rect) => total + (rect[0] * rect[1]), 0)
}