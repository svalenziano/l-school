function hello(a, b, arguments) {  // bad practice to use 'arguments' as parameter name, per LS
  console.log(a, b, arguments)
}

hello('a', 'b', 'arguments')