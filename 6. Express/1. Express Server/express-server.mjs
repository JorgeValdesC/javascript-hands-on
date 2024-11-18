// *** Setting up a Basic Web Server with Node.js and Express ***

// Step 1: Import the Express module.
// - Express is a web framework for Node.js.
// - It simplifies creating a web server by providing methods to handle HTTP requests and define routes.
// - Express is built on top of Node.js's native HTTP module, so it still benefits from Node.js's performance and scalability.
import express from "express";

// Step 2: Initialize the Express application.
// - The `express()` function creates an instance of an Express application.
// - This instance provides methods to define routes, handle requests, and manage middleware.
const app = express();

// Step 3: Define the port where the server will listen.
// - The `port` variable specifies the port number for the server.
// - Port 3000 is commonly used for local development, but in production, you might use a different port.
const port = 3000;

// *** Fancy Functionality: Adding Routes and Responses ***

// Define a basic route for the root URL ("/").
// - When a client (e.g., a browser) sends a GET request to "/", this function runs.
// - `req` (request): Contains information about the client's request.
// - `res` (response): Provides methods to send a response back to the client.
app.get("/", (req, res) => {
    res.send("Hello, welcome to my first Express server!");
    // Sends a plain text response to the client.
});

// Define a route that returns JSON data.
// - JSON is a lightweight format for exchanging data, commonly used in APIs.
app.get("/api/data", (req, res) => {
    res.json({
        message: "Welcome to the API",
        data: [1, 2, 3, 4],
    });
    // Sends a JSON response. Browsers or clients like Postman can render this nicely.
});

// Define a route with a dynamic parameter.
// - ":name" is a placeholder in the URL.
// - The client's request can include a name (e.g., "/hello/Francisco"), and we can use it in the response.
app.get("/hello/:name", (req, res) => {
    const { name } = req.params; // Extracts the dynamic parameter from the request.
    res.send(`Hello, ${name}!`);
    // Sends a personalized response to the client.
});

// Define a fallback route for undefined paths.
// - This route catches requests to any URL not defined above.
// - This is useful for handling 404 errors (page not found).
app.use((req, res) => {
    res.status(404).send("Oops! The page you're looking for doesn't exist.");
});

// Step 4: Start the server and make it listen on the specified port.
// - The `listen` method starts the server and keeps it running to handle incoming requests.
// - The callback function runs once the server is successfully started.
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    // Logs a message to indicate the server is running and where to access it.
});
