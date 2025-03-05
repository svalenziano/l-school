/* 
INPUT = STRING
RETURN = REVERSED STRING
 */



// tests

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"



// my solve
function reverse(string) {
  return string.split('').reverse().join('')
}