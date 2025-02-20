



console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
console.log(wordCount('beep beep boop boop bloop zoops'));

// my solve

/* 
ALGO
- counts = {}
- split string into array
- for each element in array:
  - if element doesn't exist (as key) in `counts`
    - Get the count of that element within the array
    - add key-value pair to `counts`
- return counts


*/

// This works
function wordCount(string) {
  let counts = {};
  let words = string.split(' ')
  for (let word of words) {
    let wordInCounts = Object.keys(counts).indexOf(word)
    if (wordInCounts < 0) {
      counts[word] = 1;
    } else {
      counts[word] += 1;
    }
  }
  return counts;
}

// simpler?
function  wordCount(string) {
  let counts = {}
  let words = string.split(' ')
  words.forEach((x) => counts[x] = (counts[x] || 0) + 1)
  return counts
}