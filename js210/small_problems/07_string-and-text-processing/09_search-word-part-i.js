/*
P
  input = word and text to search
  return = number of times the word appears in the text
  reqs
    implicit = case-insensitive
E
D
A
*/

// TESTS
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));      // 4
console.log(searchWord('amet', text));     // 1


// MY SOLUTION
/* 
Algo
  v1
  - lowercase the input string
  - create a regex
    - begins with one non-alpha char? (no will miss beginning of string)

  v2
  - lowercase the input string
  - split string into words on spaces
  - trim punctuation off ends
  - REDUCE:
    - for each word in the array
      - test for equality
      - increment th ecounter
    - return the counter
*/



// function searchWord(word, textToSearch) {
//   let words = textToSearch.toLowerCase().split(' ');
//   // remove non-word chars from beginning and end of each word
//   words = words.map((w) => w.replace(/^\W+|\W$/, ''))
//   return words.reduce((accum, w) => accum + (w === word), 0)
// }

function searchWord(word, textToSearch) {
  let pattern = new RegExp("\\b" + word + "\\b", "gi")
  return textToSearch.match(pattern).length
}