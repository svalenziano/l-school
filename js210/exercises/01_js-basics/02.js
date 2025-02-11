const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');  // prints
}

if (!myString) {
  console.log('World');  // no print
}

if (!!myArray) {
  console.log('World');  // prints (empty arrays are thruthy)
}

if (myOtherString || myArray) {
  console.log('!');   // prints bc myArray is truthy
}

//hello
//World (2nd print)
//!