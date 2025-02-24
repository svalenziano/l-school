/*
P
  Input: string of words separated by spaces
  Output: string: first and last letter of each word is swapped.
    Case of orig chars is preserved


  BONUS POINTS: use Array.prototype.map
E
D
A
*/

// TESTS
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"


// MY SOLUTION


/* 
v1 ALGO:
  - split sentence into array of words
  - for each word / element of the array:
    - create a new string using slice
    - beginning = [0] char
    - middle = slice[1, -1]
    - end = slice[-1] (-1 to end)
 */

// function swap(string) {
//   let words = string.split(' ');
//   let newWords = [];
//   for (let word of words) {
//     let newWord;
//     if (word.length > 1) {
//       newWord = word.slice(-1) + word.slice(1, -1) + word[0];
//     } else {
//       newWord = word;
//     }
//     newWords.push(newWord);
//   }
//   return newWords.join(' ')
// }



/* 
BONUS ATTEMPT
*/
function swapFirstAndLastWithMap(word) {
  let letters = word.split('');
  let swappedLetters = letters.map(function(ele, idx, arr) {
    switch (idx) {
      case 0:
        return arr.slice(-1);
      case arr.length - 1:
        return arr[0];
      default:
        return arr[idx];
    }
  })
  return swappedLetters.join('');
}
// console.log(swapFirstAndLastWithMap('hello'))

function swap(string) {
  let words = string.split(' ');
  let newWords = words.map(swapFirstAndLastWithMap)
  return newWords.join(' ')
}

