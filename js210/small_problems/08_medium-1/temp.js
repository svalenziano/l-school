"use strict";
let x = Object.freeze([1,2,3])
x[0] = 999;
console.log(x)