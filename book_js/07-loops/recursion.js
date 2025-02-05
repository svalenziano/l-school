const MAX = 50;

function doubler(num) {
  console.log(num);
  if (num <= MAX) {
    doubler(num * 2);
  }
}

doubler(5)
