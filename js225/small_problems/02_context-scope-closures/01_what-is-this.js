'use strict';



/*
P
//////////////////////////////////////////////////////


E
//////////////////////////////////////////////////////
My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////


*/

// LS TESTS
// what logs
const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);





// my solve
// NaN, because value of `this` at the time the expresion is evaluated is the global object

// Strict mode: same result.  We're not invoking a function, therefore function execution context does not apply, and `this` is unaffected by strict mode
