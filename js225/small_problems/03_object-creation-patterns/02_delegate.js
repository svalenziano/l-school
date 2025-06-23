'use strict';



/*
Algo:
- set func to value of ownerObj[method]
- call func(...args) using ownerObj as the context (use call or apply)
*/

// my solve
function delegate(ownerObj, method, ...args) {
  return function delegatedFunction() {
    return (() => {
      let func = ownerObj[method];
      if (!func) throw new Error(`${ownerObj}[${method}] doesn't exist!`);
      return func.call(ownerObj, args);
    })();
  }
}


// LS TESTS

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'

