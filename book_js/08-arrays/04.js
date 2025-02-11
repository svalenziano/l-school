let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let expectedResult = [
  'odd', 'odd', 'even', 'odd',
  'even', 'even', 'even', 'odd',
  'odd', 'even', 'even',
];

let result = myArray.map(val => val % 2 === 0 ? 'even' : 'odd');

console.log(expectedResult.toString() === result.toString())

