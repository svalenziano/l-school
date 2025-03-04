function longestWord(words) {
  // ...
}


let result = longestWord(['abc', 'launch', 'targets', '']);      // "targets"
console.log(result)



// my solve
function longestWord(arrayOfStrings) {
  return arrayOfStrings.reduce(longest)
}

function longest(longestSoFar, currentWord) {
  return currentWord.length > longestSoFar.length ? currentWord : longestSoFar;
}