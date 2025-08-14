/*
Implement a function `retryOperation` that attempts to perform an operation by calling a provided function, `operationFunc`. If operationFunc throws an error, `retryOperation` should retry the operation up to two additional times before giving up and logging "Operation failed".

P
  Summary:  Function retries the passed callback up to two times
  Inputs: callback
  Output: None
  Return: None
  Side Effects: Invoke the callback up to 3 times (first try plus 2 retries)
  Requirements: 
E
D
A
  v1: failed!
  Idea 1: Invoke the function.  If promise resolves, log the result (using `then`).  If it's rejected, try again up to 2 times
  Algo 1:
    - keep track of `tries` using an integer starting at 0
    - while tries < 3:
      - invoke the function
      - if success (then):
        - return the result
      - if error (catch):
        - increment `tries`
    - return `Operation failed`

  Idea 2: Invoke the function, which returns a promise. Keep track of `tries` via a parameter.  Recursively invoke until tries exceeds max number.
  Algo 2:
    - retryOperation(cb, tries = 0 (parameter with default arg))
      - invoke the cb
      - attach `next`, which returns the resolved value
      - attach `catch`, which recursively calls with a bound 'tries' (set to tries + 1)

*/

// v1
// I think this failed because I'm not giving the promises a chance to resolve?
// My synchronous code will run in an infinite loop before the microtask queue
//   has a chance to be accessed by the event loop.
function retryOperation_v1(cb) {
  let tries = 0;
  let result = null;
  while (tries < 3) {
    cb()
      .then((r) => result = r)
      .catch(() => tries += 1)

    if (result) return result;
  }
  return "Operation failed"
}

// v2
function retryOperation(cb, error="None", attempts=0, maxAttempts = 3) {
  if (attempts > maxAttempts) {
    console.log("Operation failed");
    return;
  }

  cb()
    .then(console.log)
    .catch((e) => retryOperation.call(null, cb, e, attempts + 1))

}

function bind2ndArg(func, arg2) {
  return (arg1) => func(arg1, arg2) 
}

function functionToTest() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.8
        ? resolve("Success!")
        : reject(new Error("Fail!"))
      }, 200);
    });
}

// Example usage:
retryOperation(functionToTest);