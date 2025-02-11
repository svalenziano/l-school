let obj = {
  b: 2,
  a: 1,
  c: 3,
};

keys = Object.keys(obj);

// for (let key in keys) {
//   console.log(keys[key].toUpperCase())
// }
// console.log(keys)
let upperKeys = keys.map((i) => i.toUpperCase());
console.log(upperKeys);
// console.log(keys)