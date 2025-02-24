/*
P
  Modify 09 to exclude non-letters
E
D
A
*/

// TESTS

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}

// MY SOLUTION
/* 
Create helper function:
 - onlyLetters
  - use filter to return array of only letters /[a-zA-Z]/.test
*/

function onlyLetters(string) {
  let letters = string.split('');
  letters = letters.filter((x) => /[a-zA-Z]/.test(x));
  return letters.join('');
}

// console.log(onlyLetters("!!##$he234245l24545l)(*[]o")) // hello

function wordSizes(string) {
  let counts = {};
  let words = string.split(' ');
  for (let word of words) {
    let length = onlyLetters(word).length;
    if (length === 0) {
      continue;
    }
    counts[length] = counts[length] || 0;
    counts[length] += 1;
  }
  return counts
}
