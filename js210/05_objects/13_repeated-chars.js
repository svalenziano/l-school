



// ls tests
repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }


// my solve
function count(array, element) {
  return array.filter((x) => x === element).length
}

function repeatedCharacters(string) {
  result = {};
  let letters = string.toLowerCase().split('')
  let letterCount;
  for (let letter of letters) {
    letterCount = count(letters, letter);
    if (letterCount > 1) {
      result[letter] = letterCount;
    }
  }
  console.log(result)
  return result
}