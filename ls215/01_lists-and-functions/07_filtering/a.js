function myFilter(array, func) {
  // ...
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let result = myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]
console.log(result)



// my solve

/* 
P
  - iNPUT: array and callback
  - output: filtered array
E
D
A
  - 
*/
function myFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}