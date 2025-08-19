// ls code
function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, 1000);
  }).catch(() => {
    console.error("An error occurred. Attempting to recover...");
    // Return a recovery promise
    return Promise.resolve("Using cached data");
  });
}

// original usage
// loadData().then(console.log);
// Logs "Data loaded" or "Using cached data"


// my solve


function fetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, Math.random() * 1000);
  })
}

function fetchCachedData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Using cached data");
      } else {
        reject("Cache error");
      }
    }, Math.random() * 1000);
  })
}

async function loadDataAsync() {
  try {
    const result = await fetch();
    console.log(result)
    return result;
  } catch (e) {
    console.error("An error occurred. Attempting to recover...");
    return await fetchCachedData().catch(console.log);
  }
}

for (let i = 0; i < 10; i++) {
  loadDataAsync();
}