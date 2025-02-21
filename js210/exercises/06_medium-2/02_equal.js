// what logs and why?


const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true




// my solve
/* 
When comparing objects (or arrays, which are really objects in disguise), 
the objects are 'equal' only if they are the same object.

Two different objects with identical keys and values will never be 'equal'

 */