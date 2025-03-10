/*
P
  INPUT = array of strings
  OUTPUT = array of strings, all vowels removed
E
D
A
*/

// TESTS
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


// MY SOLUTION
/* 
algo:
  map - string => string with vowels removed
  
  HELPER
    string -> array of chars -> filter for non-vowels
    join back into string and return
*/

// try 1 - works!
// function removeVowels(arrayOfStrings) {
//   return arrayOfStrings.map((str) => {
//     return str.split('')
//       .filter((char) => (/[^aeiou]/i.test(char)))
//       .join('')
//   })
// }

// try 2 - cleaner
function removeVowels(arrayOfStrings) {
  return arrayOfStrings.map((str) => {
    return [...str.matchAll(/[^aeiou]/gi)].join('');
  })
}

