/*
P
  input = string
  return = array containing every word fro mthe string
              each words is followed by a space and the length of the word
  reqs
    if input is empty string, return empty array
E
D
A
*/

// TESTS
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []


// MY SOLUTION
function wordLengths(string) {
  if (string === undefined || string.trim() === '') {
    return [];
  }
  let words = string.match(/[\S]+/g);
  let result = words.map((x) => x + ` ${x.length}`)
  console.log(result)
  return result
}


