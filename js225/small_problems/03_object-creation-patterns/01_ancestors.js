"use strict";

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

/* 
MY SOLVE
Input = calling object (this)
Return = array of `name` properties
Algo
  - init empty array
  helper function:
    - while prototype isn't null:
      - proto = prototype of `this`
      - get `name` property of proto push to array
      - recursive call
  - return array
*/

function ancestors() {
  let arr = [];

  function helper(obj) {
    let proto = Object.getPrototypeOf(obj);
    if (proto && proto.name) {
      arr.push(proto.name);
      helper(proto);
    } else if (proto === Object.prototype){
      arr.push("Object.prototype");
    }
  }
  
  helper(this);
  return arr;
  };

foo.ancestors = ancestors;

// LS tests
console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']