// what's wrong and why?

function penultimate(string) {
  return string.split(' ')[-2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"







// my answer
// Problem: trying to access object element with key '-2'
// Solution: use length - 1 to access last element

function penultimate(string) {
  let x = string.split(' ');
  return x.slice(-2, -1)
}
