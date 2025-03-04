function oddOrEven(array) {
  for (let num of array) {
    if (num % 2 === 0) {
      console.log(`${num} is even.`);
    } else {
      console.log(`${num} is odd.`);
    }
  }
}

oddOrEven([1,2,3,4,5,6,7,8,])