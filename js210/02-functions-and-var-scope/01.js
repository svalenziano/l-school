function average(a, b, c) {
  let args = [a, b, c];
  if (args.indexOf(undefined) === -1) {
    let avg = (a + b + c) / 3;
    return avg
  } else {
    return null
  }
}

console.log(average(1,2,3))
console.log(average(100, 50, 0))
console.log(average(5,5,5))
console.log(average(1,2,10))