function syncWait(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {
        // Busy-wait
    }
}

function add(a, b) {
    syncWait(3000); // Wait for 3 second
    return a + b;
}

function multiply(a, b) {
    syncWait(1000); // Wait for 1 second
    return a * b;
}

const sum = add(5, 3);
const product = multiply(sum, 2);

console.log('Sum:', sum);
console.log('Product:', product);