/* 
input = string1: word to search for, string 2: test to search
return = number of occurences
reqs = use regex


*/


//TESTS
let text = 'The quick brown fox     jumps over the   lazy dog.';
console.log(countWordInText('the', text));    // 2
console.log(countWordInText('dog', text));    // 1


/* 
MY SOLUTION

*/

function countWordInText(word, text) {
  let words = text
    .toLowerCase()
    .replace(/[^a-zA-Z1-9\s]/g, '')  // eliminate non-alphanumerics
    .split(/\s+/);
  return words.reduce((count, wordToTest) => count + (word === wordToTest), 0);
}