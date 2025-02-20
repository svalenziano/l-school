let array = [1,2,3,1,1,1,1,1];

console.log(count(array, 1))
console.log(count(array, 2))
console.log(count(array, 4))



// function count(array, element) {
//   let c = 0;
//   for (let ele of array) {
//     if (ele === element) {
//       c += 1;
//     }
//   }
//   return c
// }

// function count(array,element) {
//   return array.filter((x) => x === element).length
// }

function count(array, element) {
  return array.reduce((accum, cur) => accum + (cur === element) )
}