// Import the Express module
import express from "express";
import path from "path";
import { fileURLToPath } from "url"; // To recreate __dirname in ESM

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an instance of an Express application
const app = express();

// Define the port number for the server to listen on
const port = 3000;

/**
 * Route: "/"
 * Method: GET
 * Description: Sends a simple HTML response using `res.send()`.
 * The `res.send()` method is used to send a string, HTML, JSON, or other content types
 * as the response. It sets the appropriate headers automatically based on the content type.
 */
app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>"); // Sending a basic HTML response
});

/**
 * Route: "/about"
 * Method: GET
 * Description: Sends a combination of HTML tags and content using `res.send()`.
 * This demonstrates the use of `res.send()` for constructing simple responses dynamically.
 */
app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is Javi</p>");
});

/**
 * Route: "/contact"
 * Method: GET
 * Description: Sends contact information using `res.send()`.
 * This demonstrates another use of `res.send()` for sending plain HTML responses.
 */
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: +447596048868</p>");
});

/**
 * Route: "/file-example"
 * Method: GET
 * Description: Sends a static HTML file from the server's file system using `res.sendFile()`.
 * The `res.sendFile()` method is used to serve static files such as HTML, CSS, JavaScript, or images.
 * It automatically determines the content type based on the file extension and sets appropriate headers.
 */
app.get("/file-example", (req, res) => {
    // Use `res.sendFile()` to send the file located in the public folder
    res.sendFile(path.join(__dirname, "public", "example.html"));
});

/**
 * Middleware to handle 404 errors for undefined routes.
 * Description: This middleware catches all unmatched routes and sends a 404 response.
 */
app.use((req, res) => {
    res.status(404).send("<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>");
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

/**
 * NOTES:
 * - `res.send()` is best suited for sending simple responses dynamically (text, HTML, JSON).
 * - `res.sendFile()` is ideal for serving static files like HTML, CSS, images, or JavaScript.
 * - Use `res.status(code)` to set the HTTP status code for the response before using `send()` or `sendFile()`.
 * - `404 Middleware`: Adding a middleware for unmatched routes ensures a friendly error page for undefined paths.
 */
