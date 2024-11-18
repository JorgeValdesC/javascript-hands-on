// Import the required modules
import fs from "fs";
import { promisify } from "util";

// Promisify fs.readFile to use it with Promises/async
const readFileAsync = promisify(fs.readFile);

/**
 * Simulated asynchronous task 1: Reading a file
 * This simulates an I/O-bound operation where Node.js reads data from disk.
 * While this happens, Node.js continues executing other tasks.
 */
async function readFile() {
    console.log("Task 1: Starting to read the file...");
    try {
        const data = await readFileAsync("./data.json", "utf8"); // Simulate reading a file
        console.log("Task 1: Finished reading file:", data);
    } catch (err) {
        console.error("Task 1: Error reading file:", err);
    }
}

/**
 * Simulated asynchronous task 2: Fetching data from an API
 * This uses a setTimeout to simulate waiting for an API response.
 * Other tasks can run while the "API fetch" is happening.
 */
function fetchAPI() {
    console.log("Task 2: Starting API fetch...");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2: Finished API fetch: { data: 'Fake API Data' }");
            resolve();
        }, 2000); // Simulate 2 seconds of API latency
    });
}

/**
 * Synchronous task: Logging numbers in a loop
 * This is CPU-bound and blocks the event loop while it's running.
 * However, since it's synchronous, it will execute immediately
 * without waiting for the asynchronous tasks.
 */
function logNumbers() {
    console.log("Task 3: Starting number logging...");
    for (let i = 1; i <= 5; i++) {
        console.log(`Task 3: Number ${i}`);
    }
    console.log("Task 3: Finished number logging.");
}

/**
 * Main function to execute all tasks
 * - Task 1 (readFile) and Task 2 (fetchAPI) happen asynchronously.
 * - Task 3 (logNumbers) happens synchronously.
 * - Observe the order in which logs appear to understand asynchronicity.
 */
async function main() {
    console.log("Main: Starting all tasks...");

    // Tasks run sequentially
    await readFile(); // Task 1
    await fetchAPI(); // Task 2
    logNumbers(); // Task 3 (sync task runs immediately after)

    console.log("Main: All tasks completed.");
}


// Run the main function
main();
