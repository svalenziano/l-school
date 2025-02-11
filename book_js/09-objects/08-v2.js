function copyObj(obj, keys=[]) {
  let newObj = {}
  if (keys.length === 0) {
    Object.keys(obj).forEach(function(key) {
      keys.push(key)
    })
  }
  keys.forEach(key => newObj[key] = obj[key])
  return newObj
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