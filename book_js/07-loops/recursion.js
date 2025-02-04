const MAX = 10;

function doubler(num) {
  return num * 2;
}

num = 1
while (doubler(num) < MAX) {
  num = doubler(num);
  console.log(num);
}