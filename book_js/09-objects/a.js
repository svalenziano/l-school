let bob = { name: 'Bob', age: 37};
let otherBob = Object.create(bob);
otherBob.age = 96;

console.log(bob)
console.log(otherBob)
console.log(otherBob.name)