function multipleTransformation([x,y]) {
  // input = two element array representing x & y coords
  let up = [0, 1];
  let down = [0, -1];
  let right = [1, 0];
  let left = [-1, 0];
  for (let [tX, tY] of [up, down, left, right]) {
    console.log(x + tX, ',', y + tY)
  }
}

multipleTransformation([0,0])
multipleTransformation([5,5])