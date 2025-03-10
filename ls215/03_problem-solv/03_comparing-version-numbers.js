/* 
P
  INPUT = any two version numbers (v1 and v2)
  OUTPUT = INTEGER
    1 = v1  >  v2
   -1 = v1  <  v2
    0 = v1 === v2
    null if any chars are not a numeral or '.' or '..'

Legal version numbers:
1
1.0
1.2
3.2.3
3.0.0
4.2.3.0
  - leading zeroes are permitted, ex '0.1.1'

Examples:
0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37


P
  QUESTIONS
    - input are always strings?
    - what about invalid numbers such as '.1.1.1' or '1...1'?
    - what about multiple zeros, ex: '1.00.1'
E
==============================
// HAPPY MIDDLE
1.2.0.0 < 1.18.2
1.2 = 1.2.0.0
1.18.2 < 13.37
1.9.9.9.9 < 2.0.0.0
1.0.1 < 1.0.10
// EDGE CASES
1 = 1.0.0.0.0
1.1 = 1.1.0

D
==============================
Each version number consists of a series of dot-separated 'numbers'

Data structure:
  Array of numbers (integers)

A
==============================
V1 HIGH LEVEL
  Return `null` if invalid chars are present (non numeral or non-'.')
    - or multiple '..' in a row
  Using '.' as delimiter, Split version number into array of INTEGERS
    Map strings into integers
  minLength = Get length of shortest list
  maxLength = Get length of longest list 🔴`
  longerList = SET to the longer of the lists (HELPER)
  For each index between 0 and minLength:
    Compare the array element from the v1 against the element in the v2 list
    If v1 is greater than v2:
      Return 1
    Else if v1 is less than v2:
      Return -1
  For each index between minLength and maxLength 🔴:
    If the element at that index in the longerList is greater than zero
      - return -1 or 1, as appropriate!?!?
  return 0

  v2 high level
    - Return `null` if invalid chars are present (non numeral or non-'.')
    - v1Array and v2Array = split version number strings into array of integers using '.' as delimiter
    - maxLength = Get length of longest array 
    - for each index between 0 and maxLength:
      - v1num = element at index, or zero
          (provide default value in case the other array is longer)
      - v2num = element at index, or zero (same as above)
      - If v1num > v2 num:
        - return 1
      - if v1 num < v2num:
        - return -1
    - return 0


*/

// MY TESTS
// HAPPY MIDDLE
// 1.2.0.0 < 1.18.2
console.log(compareVersions('1.2.0.0', '1.18.2') === -1)
console.log(compareVersions('0.1', '0.11') === -1)
console.log(compareVersions('0.1', '1.0') === -1)
console.log(compareVersions('1.0', '0.1') === 1)

// 1.2 = 1.2.0.0
console.log(compareVersions('1.2', '1.2.0.0') === 0)
// 1.9.9.9.9 < 2.0.0.0
console.log(compareVersions('1.9.9.9.9', '2.0') === -1)
// 1.0.1 < 1.0.10
console.log(compareVersions('1.0.1', '1.0.10') === -1)
// EDGE CASES
// 1 = 1.0.0.0.0
console.log(compareVersions('1', '1.0.0.0.0') === 0)
console.log(compareVersions('1', '1.0.0.0.1') === -1)
// 1.1 = 1.1.0
console.log(compareVersions('1.1', '1.1.0') === 0)
// Invalid
console.log(compareVersions('1.2.0.0', '1.18..2') === null)
console.log(compareVersions('1.3.,', '1') === null)
console.log(compareVersions('1.a,', '1') === null)
console.log(compareVersions('1.0,', 'a') === null)


// My solution
// function compareVersions(version1, version2) {
//   let invalidCharacters = /[^0-9.]/;
//   if (invalidCharacters.test(version1) || invalidCharacters.test(version2)) {
//     return null;
//   }
//   let stringToInteger = (x) => Number.parseInt(x)
//   let v1Array = version1.split('.').map(stringToInteger);
//   let v2Array = version2.split('.').map(stringToInteger);
//   // console.log(v1Array, '|', v2Array)
//   let minLength = Math.min(v1Array.length, v2Array.length);
//   for (let i = 0; i < minLength; i++) {
//     if (v1Array[i] > v2Array[i]) {
//       return 1;
//     }
//     if (v1Array[i] < v2Array[i]) {
//       return -1;
//     }

//   }
//   return 0;
// }


function compareVersions(v1String, v2String) {
  let invalidChars = /[^0-9.]|\.{2,}/;
  if (invalidChars.test(v1String) || invalidChars.test(v2String)) {
    return null;
  }
  let stringToIntegers = (x) => x.split('.').map((i) => Number.parseInt(i, 10));
  let v1Array = stringToIntegers(v1String);
  let v2Array = stringToIntegers(v2String);
  let maxLength = Math.max(v1Array.length, v2Array.length);
  for (let i = 0; i < maxLength; i++) {
    let v1Number = v1Array[i] || 0;
    let v2Number = v2Array[i] || 0;
    if (v1Number > v2Number) {
      return 1;
    }
    if (v1Number < v2Number) {
      return -1;
    }
  }
  return 0;
}