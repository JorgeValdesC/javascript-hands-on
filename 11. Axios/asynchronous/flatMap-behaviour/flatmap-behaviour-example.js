function getData() {
    return Promise.resolve('data');
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data + ' processed');
        }, 1000);
    });
}

getData()
    .then(processData)    // <--- This could create a Promise inside a Promise, but it doesn't.
    .then(console.log);   // Logs "data processed" after 1 second
