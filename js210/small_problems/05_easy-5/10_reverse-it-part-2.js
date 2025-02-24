/*
P
  input = string = sentence
  return = string = sentence.  words that are 5 chars or longer should be reversed
E
D
A
*/

// TESTS
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"


// MY SOLUTION

function reverseString(string) {
  return string.split('').toReversed().join('');
}

function reverseWords(sentence) {
  let words = sentence.split(' ');
  let funkyWords = words.map(function(word) {
    if (word.length >= 5) {
      return reverseString(word);
    } else {
      return word
    }
  });
  return funkyWords.join(' ')
}
