

function average(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total / arr.length;
}

function sum(a,b,c) {
  args = [a,b,c];
  if (args.indexOf(undefined) === -1) {
    return a + b + c;
  } else {
    return null;
  }
}

// console.log(average([1,1,1]));
// console.log(average([0,5,10]));
// console.log(average([1,2,456,3456,21,43,4]));
// console.log(sum(1,1,1));
// console.log(sum(1,2,7));
// console.log(sum(50, 25, 12.5));

let temperatures = [70, 35, 56, 90, 102];
console.log(average(temperatures))

