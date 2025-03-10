/*

P
  - input string
  - return = Title-cased string
E
D
A
*/

// TESTS
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'


// MY SOLUTION
/* 
P
E
D
A
  - Make array: split into words using regex
  - map: word -> first char of word is cap, last part is lowercased
  - join and return string
 */
function wordCap(sentence) {
  let words = sentence.match(/\S+/g)
  words = words.map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase())
  return words.join(' ');
}

