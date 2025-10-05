function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demoAsyncWait() {
    console.log('Waiting...');
    await wait(2000); // waits for 2 seconds
    console.log('Done waiting!');
}

demoAsyncWait();