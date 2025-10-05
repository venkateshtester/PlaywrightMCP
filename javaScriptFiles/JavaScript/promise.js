// Creating a new Promise that simulates async work (e.g., API call)
const myPromise = new Promise((resolve, reject) => {
  const random = Math.random();
  setTimeout(() => {
    if(random > 0.5) {
      resolve("Promise fulfilled! Random value: " + random);
    } else {
      reject("Promise rejected. Random value: " + random);
    }
  }, 1000); // Simulate 1 second async delay
});

// Consuming the Promise
myPromise
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });
