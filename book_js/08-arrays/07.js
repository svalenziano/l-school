let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83


function sumOfSquares(arr) {
  return arr.reduce((accum, current) => accum + current * current, currentValue = 0)
}