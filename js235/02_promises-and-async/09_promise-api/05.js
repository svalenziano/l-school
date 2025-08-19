// ls code
function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } 
    }, Math.random() * 750);
  });
}

// expected usage
for (let i = 0; i < 10; i++) {
  timeoutPromise(loadData(), 500)
    .then(console.log)
    .catch(console.log)
}


// my solve
function timeoutPromise(promise, ms) {
  let timer = new Promise((_, reject) => {
    setTimeout(() => reject(`${ms} ms elapsed, aborting!`), ms);
  });
  return Promise.race([promise, timer]);
}

