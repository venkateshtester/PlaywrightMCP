function getEvenNumber(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value % 2 === 0) {
        resolve(`Resolved: ${value} is even`);
      } else {
        reject(`Rejected: ${value} is not an even number`);
      }
    }, delay);
  });
}

// Promise Chaining Example
getEvenNumber(4, 1000)
  .then((result1) => {
    console.log(result1); // "Resolved: 4 is even"
    return getEvenNumber(6, 2000);
  })
  .then((result2) => {
    console.log(result2); // "Resolved: 6 is even"
    return getEvenNumber(5, 1500); // Will reject
  })
  .then((result3) => {
    // This will NOT execute due to previous rejection
    console.log(result3);
  })
  .catch((error) => {
    // This will catch from any rejected promise above (e.g., for 5)
    console.error('Error:', error); // "Rejected: 5 is not an even number"
  });
