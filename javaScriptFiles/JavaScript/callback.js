function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function welcome() {
    console.log('Welcome to JavaScript!');
}

// Usage:
greet('Naveen', welcome);

//Callback with Asynchronous Function (setTimeout)

function printInfo(name, callback) {
    setTimeout(function () {
        console.log('Printing info for ' + name);
        callback('Please call me back');
    }, 1000); // 1 second delay
}

function displayMessage(message) {
    console.log(message);
}

// Usage:
printInfo('Lisa', displayMessage);




