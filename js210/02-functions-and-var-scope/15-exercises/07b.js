function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);  // return: 'Hello', side-effects: none
let exclaimedWord = exclaim(capitalizedWord); // return 'Hello!!!', side-effects: none;

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

/*
hello
Hello
Hello!!!
*/