var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';  // reassign global var
}

someFunction();
console.log(myVar);  // this is local