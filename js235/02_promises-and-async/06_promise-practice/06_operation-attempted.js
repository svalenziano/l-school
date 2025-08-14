// LS Code
function mockAsyncOp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Operation succeeded");
      } else {
        reject("Operation failed");
      }
    }, 250);
  });
}


// my solution
mockAsyncOp()
  .then(console.log)
  .catch(console.error)
  .finally(() => {console.log("Operation attempted")})