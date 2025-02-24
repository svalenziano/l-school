/*
P
  INPUT = string of one or more space-separated words
  RETURN = object that shows the number of words of different lengths
  REQS
    - WOrds = non-space adjacent
    - Words include adjacent punctuation
E
D
A
*/

// TESTS
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}


// MY SOLUTION
/* 
algo:
  - create empty object {}
  - split string into array of words
  - for each word:
    - `key` = length of word
    - if word is in object
      - value of `key`: increment the count
    - else
      - value of `key`: set count to 1
  - return object

 */

function wordSizes(string) {
  let counts = {};
  let words = string.split(' ');
  for (let word of words) {
    let length = word.length;
    if (length === 0) {
      continue;
    }
    counts[length] = counts[length] || 0;
    counts[length] += 1;
  }
  return counts
}
