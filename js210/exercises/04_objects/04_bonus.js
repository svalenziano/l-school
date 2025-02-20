// what prints and why

const myObj = {};
myObj[myFunc()] = 'hello, '; 

function myFunc() {
  return 'funcProp';
}

console.log(myObj); 
myObj[myFunc()] = 'world!'; 
console.log(myObj);

