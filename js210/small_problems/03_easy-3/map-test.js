let x = [1,2,3,4,5];

// JS "Iterative methods" like map and filter take 3 positional args: 
//     element, index, array 

// In the below function, we only use one of those elements  
let y = x.map((element, index, array) => element)
console.log(y)
// [1, 2, 3, 4, 5]

// "index" works as you'd expect
y = x.map((element, index, array) => index)
console.log(y)
// [0, 1, 2, 3, 4]

// So does "array"
y = x.map((element, index, array) => array)
console.log(y)
/* 
[
  [ 1, 2, 3, 4, 5 ],
  [ 1, 2, 3, 4, 5 ],
  [ 1, 2, 3, 4, 5 ],
  [ 1, 2, 3, 4, 5 ],
  [ 1, 2, 3, 4, 5 ]
]
 */

// BEWARE!  Don't confused the arguments for keyword args!
// Even though the arg is named 'array', it's still referencing the 'element'
y = x.map((array) => array)
console.log(y)
// [ 1, 2, 3, 4, 5 ]