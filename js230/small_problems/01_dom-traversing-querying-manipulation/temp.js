// "use strict";

function myFunc(arg1, arg2) {  // use spread syntax to create two local variables
  console.log(arg1, arg2);       // Access the local vars... Output: "abc def"
  console.log(arguments);        // see note below
}

myFunc(arg1= 'abc', arg2= 'def')