// Simulated asynchronous function returning a Promise
function doTask(taskName) {
    console.log(`Starting ${taskName}...`); // Log start of task
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${taskName} done!`); // Log completion
            resolve(); // Resolve the promise to signal task completion
        }, 1000);
    });
}

// Async function using async/await to run tasks in sequence
async function runTasks() {
    try {
        // Await pauses the execution until the promise resolves
        await doTask("Task 1");
        await doTask("Task 2");
        await doTask("Task 3");
        console.log("All tasks completed!");
    } catch (error) {
        // Catch any error from the tasks
        console.error("An error occurred:", error);
    }
}

// Execute the async function
runTasks();
