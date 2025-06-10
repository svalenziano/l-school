// This example uses `global`, for use with Node

one = 1;
var two = 2;
let three = 3;

function four() {
  return 4;
}

console.log(global.one) // 1
console.log(global.two)  // 2
console.log(global.three)  // undefined
console.log(global.four())  // 4
