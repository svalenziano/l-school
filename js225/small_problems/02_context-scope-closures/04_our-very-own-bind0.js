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



// my solve
/* 
myBind:
- input: function, context object
- retun: function, bound to context

algo: use `self` var to call the function

*/

function myBind(f, context, ...boundArgs) {
  return function(...args) {
    return f.apply(context, boundArgs.concat(args));
  }
}


// DEMONSTRATION
let test = {
  factor: 10,
  nums: [1,2,3,4],
};

function multiMultiply(prefix='', suffix='') {
  return this.nums.map((n) => {
    return (prefix + String(n * this.factor) + suffix)
  });
}

let boundToTest = myBind(multiMultiply, test, prefix='x=');

console.log(boundToTest(suffix="!!!"));

