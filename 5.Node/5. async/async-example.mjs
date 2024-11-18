// Import the required modules
import fs from "fs"; // File system module for reading files
import { promisify } from "util"; // Utility module to convert callbacks to promises

// Path to the data file
const dataFilePath = "./data.json";

////// 1. CALLBACKS //////

/**
 * Read a file using a callback.
 * fs.readFile takes a callback as the second argument.
 * The callback has two parameters: an error object and the file data.
 */
function readFileWithCallback(filePath, callback) {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            // If there is an error, pass it to the callback
            return callback(err);
        }

        // If successful, parse the data as JSON and pass it to the callback
        try {
            const jsonData = JSON.parse(data);
            callback(null, jsonData);
        } catch (parseError) {
            callback(parseError);
        }
    });
}

// Using the callback function
readFileWithCallback(dataFilePath, (err, data) => {
    if (err) {
        console.error("Error with callback:", err);
    } else {
        console.log("Callback: Number of users is", data.users.length);
    }
});


////// 2. PROMISES //////

/**
 * Read a file using a promise.
 * We wrap fs.readFile in a new Promise to handle the asynchronous operation.
 */
function readFileWithPromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                // Reject the promise if there's an error
                return reject(err);
            }

            // Parse the JSON data and resolve the promise
            try {
                const jsonData = JSON.parse(data);
                resolve(jsonData);
            } catch (parseError) {
                reject(parseError);
            }
        });
    });
}

// Using the promise function
readFileWithPromise(dataFilePath)
    .then((data) => {
        console.log("Promise: Number of users is", data.users.length);
    })
    .catch((err) => {
        console.error("Error with promise:", err);
    });


////// 3. ASYNC/AWAIT //////

/**
 * Read a file using async/await.
 * We use promisify to convert fs.readFile into a promise-based function.
 */
const readFileAsync = promisify(fs.readFile);

// Async function to read and process the file
async function processFileAsync(filePath) {
    try {
        // Await the reading of the file and parse the JSON data
        const data = await readFileAsync(filePath, "utf8");
        const jsonData = JSON.parse(data);

        // Log the number of users
        console.log("Async/Await: Number of users is", jsonData.users.length);
    } catch (err) {
        console.error("Error with async/await:", err);
    }
}

// Using the async/await function
processFileAsync(dataFilePath);
