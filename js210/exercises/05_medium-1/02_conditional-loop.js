// will the program log each number btw 0 and 9 inclusive, if the num is a mult of 3?

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}





// my solve
// no - infinite loop.  Faulty incrementation.  Will stall at 3 infitely.