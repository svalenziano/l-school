/*
P
  input = array of nums
  output = nums, sorted based on english word for that number
E
D
A
*/

// TESTS
// alphabeticNumberSort(
//    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


// MY SOLUTION
/* 
use `toSorted()` method
sorting callback:
  - (a, b) => String(nums[a]) - String(nums[b])
*/

let numberWords = "zero, one, two, three, four, five, six, seven, eight, nine, ten, \
eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, \
nineteen"
numberWords = numberWords.split(', ')
// console.log(nums)


function alphabeticNumberSort(arrayOfNums) {
  return arrayOfNums.toSorted((a, b) => {
    if (numberWords[a] < numberWords[b]) {
      return -1;
    } else if (numberWords[a] === numberWords[b]) {
      return 0;
    } else {
      return 1;
    }
  })
  // return arrayOfNums.toSorted((a, b) => nums[a] - nums[b])
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
