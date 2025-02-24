/*
P
E
D
A
*/

// TESTS
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]


// MY SOLUTION
// function digitList(integer) {
//   string =  String(integer);
//   array = [];
//   for (letter of string) {
//     array.push(Number(letter))
//   }
//   console.log(array)
//   return array
// }

// More concise using map
function digitList(integer) {
  let digits = String(integer).split('');  // array of characters
  return digits.map((x) => Number.parseInt(x))
}