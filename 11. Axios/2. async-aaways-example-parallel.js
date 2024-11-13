// Simulated asynchronous function that returns a Promise
function doTask(taskName, duration) {
    console.log(`Starting ${taskName}...`); // Log when task starts
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous task with setTimeout
        setTimeout(() => {
            console.log(`${taskName} done!`); // Log when task completes
            resolve(); // Resolve the promise after the specified duration
        }, duration);
    });
}

// Async function to run tasks in both sequence and parallel
async function runTasks() {
    try {
        // Sequential execution of Task 1 and Task 2
        console.log("=== Sequential Execution ===");
        await doTask("Task 1", 1000); // Task 1 takes 1 second
        await doTask("Task 2", 2000); // Task 2 takes 2 seconds

        // Parallel execution of Task 3, Task 4, and Task 5
        console.log("=== Parallel Execution ===");
        const tasks = [
            doTask("Task 3", 3000), // Task 3 takes 3 seconds
            doTask("Task 4", 1000), // Task 4 takes 1 second
            doTask("Task 5", 2000)  // Task 5 takes 2 seconds
        ];

        // Use Promise.all to wait for all tasks to complete in parallel
        await Promise.all(tasks);

        console.log("All tasks completed!"); // Log after all tasks finish

    } catch (error) {
        // Catch and log any errors from the tasks
        console.error("An error occurred:", error);
    }
}

// Execute the async function
runTasks();


// Simulated Asynchronous Task(doTask):

// doTask(taskName, duration) simulates an asynchronous task, like an API request, that takes a specified duration.
// It logs when the task starts, waits for duration milliseconds, then logs when the task completes and resolves the Promise.

// Sequential Execution:

// Inside runTasks, Task 1 and Task 2 are executed sequentially with await.
// await doTask("Task 1", 1000) waits for Task 1 to finish before Task 2 starts.
// This sequential execution is useful when tasks depend on each other.


// Parallel Execution with Promise.all:

// For Task 3, Task 4, and Task 5, we create an array of Promises(tasks) to run them in parallel.
//     Promise.all(tasks) starts all tasks at the same time and waits for all to complete.
//         Benefit: Since they’re independent, they run concurrently, making the code faster as they don’t wait for each other.

// even though Node.js is single-threaded, it achieves parallelism for I/O tasks by delegating them to the event loop and allowing them to complete independently. This is especially useful in server applications where handling multiple I/O-bound tasks efficiently (like handling HTTP requests) is critical.