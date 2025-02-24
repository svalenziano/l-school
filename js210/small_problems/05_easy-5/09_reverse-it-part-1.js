/*
P
E
D
A
*/

// TESTS
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"


// MY SOLUTION
function reverseSentence(sentenceString) {
  return sentenceString.split(' ').toReversed().join(' ')
}
