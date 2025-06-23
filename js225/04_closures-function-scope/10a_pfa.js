function myFunc(salutation, name) {
  console.log(`${salutation[0].toUpperCase() + salutation.slice(1)}, ${name}!`)
}

function partial(callback, ...args) {
  return (...args2) => {
    callback(...args, ...args2);
  };
}

myFunc('howdy', 'Joe')

let sayHello = partial(myFunc, "Hello")
sayHello('Brandon')

// no thisArg is needed in this case, so `null` is used
let myPFA = myFunc.bind(null, 'hi')

myPFA('Sarah')