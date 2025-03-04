let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121


/* 

Same as 15, except only include area of squares (ignore non-square rectangles)


ALGO
  - Filter: include only squares
  - Map: rectangles -> areas (integers)
  - Reduce: areas + total (integer)


 */

 function totalSquareArea(rectangles) {
  let squares = rectangles.filter((x) => x[0] === x[1]);
  let areas = squares.map((x) => x[0] ** 2);
  return areas.reduce((accum, x) => accum + x)
 }