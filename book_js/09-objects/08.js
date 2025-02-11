function copyObj(obj, keys=[]) {
  /*
  make array of keys, if it's not already specified
  create a new array
  return that array
  */
  if (keys.length === 0) {
      keys = Object.keys(obj)
  }
  let copy = {}
  for (let key in keys) {
    key = keys[key]
    value = obj[key]
    copy[key] = value
  }
  return copy
}


let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }