// ls code
function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, 1000);
  });
}



// my solve
for (let i = 0; i < 10; i++) {
  const services = [flakyService(), flakyService(), flakyService()];
  Promise.any(services)
    .then(console.log)
    .catch((e) => console.log("All 3 attempts failed"))
}