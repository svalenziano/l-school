/* 
RANDOMLY GENERATE AN AGE BETWEEN 20 AND 200, INCLUSIVE

*/




// tests
// Sample outpout: "Teddy is 69 years old!"

const MIN = 20;
const MAX = 200;

for (let i=0; i < 25; i++) {
  let num = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
  console.log(`Teddy is ${num} years old!`)
}
