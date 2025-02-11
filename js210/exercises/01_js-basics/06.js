let r = require('readline-sync')

let phrase

while (true) {
  phrase = r.question('Please enter a phrase: ')
  console.log(`There are ${phrase.length} characters in "${phrase}".`)
  console.log(`Not including spaces, the phrase is ${phrase.replace(' ', '').length} chars long.`)
  console.log()
}