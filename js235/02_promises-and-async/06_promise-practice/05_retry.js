/*
A
  - IDEA V1
    - Call the func
    - If successful
      - log the result (the resolution)
    - else
      - retry up to 2 times
  - ALGO V1
    - attempts = 0
    - While attempts <= 2:
      - Call the func
      - If successful
        - log the result (the resolution)
        - return
      - else
        - increment `attempts`
        - 
        - retry up to 2 times
*/




// Example usage:
retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.33
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);