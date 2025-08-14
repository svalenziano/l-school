function loadData() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Data loaded")
    } else {
      reject(new Error("Network Error"))
    }
  }).catch(() => {
    return Promise.resolve("Using cached data");
  });
}

loadData().then(console.log)
  