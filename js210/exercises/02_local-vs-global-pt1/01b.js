var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();  // creates a function-scoped `myVar`, shadowing the global
console.log(myVar); // This is global