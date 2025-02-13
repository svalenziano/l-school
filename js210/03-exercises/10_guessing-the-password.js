/*

*/

const PASSWORD = 'asdf'
const MAX_TRIES = 3

for (let i=0; i<MAX_TRIES; i++) {
  let pword = prompt('Enter a password please: ')
  if (pword === PASSWORD) {
    console.log("You have successfully logged in!")
    break
  }
  if (i === MAX_TRIES - 1) {
    console.log("You have been denied access.")
  }
}