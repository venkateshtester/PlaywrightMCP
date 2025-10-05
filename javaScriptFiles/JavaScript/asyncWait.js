 async function example() {
  console.log("Step 1");
  await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 sec
  console.log("Step 2");
}
example();
