function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return word += '!!!';
}

let word = 'hello';  
let capitalizedWord = capitalize(word);  // returns 'Hello'
let exclaimedWord = exclaim(capitalizedWord);  //  returns 'Hello!!!'

console.log(word);  // 'hello'
console.log(capitalizedWord);  // 'Hello'
console.log(exclaimedWord);  // 'Hello!!!'