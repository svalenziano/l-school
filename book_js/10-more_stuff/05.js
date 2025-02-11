function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

console.log(doSomething('hi there'));
console.log(doSomething('Hanna Boops'));
console.log(doSomething('goodbye'));