/*
P
  Create templates and a function that enable the following mad-lib examples
  to work properly.
E
D
A
*/

// // LS EXAMPLES
// // QUOTES ARE SHOWN FOR EMPHASIS.  NO QUOTES IN ACTUAL OUTPUT

// // These examples use the following list of replacement texts:
// // adjectives: quick lazy sleepy noisy hungry
// // nouns: fox dog head leg tail cat
// // verbs: jumps lifts bites licks pats
// // adverbs: easily lazily noisily excitedly
// // ------

// madlibs(template1);
// // The "sleepy" brown "cat" "noisily"
// // "licks" the "sleepy" yellow
// // "dog", who "lazily" "licks" his
// // "tail" and looks around.

// madlibs(template1);
// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.

// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".


// MY SOLUTION
/*
P
  Input: string template
  Return: mad-libbed string
  Output: none

  Rules:
    - Template
      - should have placeholders for 1) nouns 2) verbs and 3) adverbs
    - Function
      - from lists: randomly selects nouns, verbs, adverbs and 
          populates the template appropriately

E
D
Keeping track of number of nouns, verbs, etc.:
  integers?
  `counts` object with entries for each type?
    '%noun': 1,
    '%verb': 0,
    ...

Dictionary to draw from:
  object with keys that match the template placeholders

A

- template2 = "The %noun %verb the %noun %noun"

MAIN FUNCTION
  - dictionary = {%noun ...}
  - for each `placeholder` in [%noun, %verb, %...]:
    - count instances of `placeholder` (ie '%verb') within the template (regex match with global flag)
      - use empty list for default value (??)
    - for loop: each integer between 0 and count (non inclusive):
      - replace the next instance of `key` with a random word from `dict[placeholder]`
  - return string
*/

const template1 = "The %adjective brown %noun %adverb %verb the %adjective "
  + "yellow %noun, who %adverb %verb his %noun and looks around."
const template2 = "The %noun %verb the %noun %noun"

function madlibs(template) {
  const dictionary = {
    '%adjective': ['quick', 'lazy', 'sleepy', 'noisy', 'hungry',],
    '%noun': ['fox', 'dog', 'head', 'leg', 'tail', 'cat',],
    '%verb': ['jumps', 'lifts', 'bites', 'licks', 'pats',],
    '%adverb': ['easily', 'lazily', 'noisily', 'excitedly',],
  }
  let result = template;
  for (let placeholder of Object.keys(dictionary)) {
    const r = new RegExp(placeholder, 'g')
    const count = (template.match(r) ?? []).length
    // console.log(placeholder, count)
    for (let i = 0; i < count; i++) {
      result = result.replace(placeholder, random(placeholder))
    }
  }
  return result;

  function random(objectKey) {
    let idx = Math.floor(Math.random() * Object.keys(dictionary).length)
    return dictionary[objectKey][idx]
  }
}


// LS TESTS (AGAIN)
console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".