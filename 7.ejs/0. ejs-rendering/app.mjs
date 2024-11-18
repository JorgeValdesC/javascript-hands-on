// Import the required modules
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname in ECMAScript Modules (ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize the Express application
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Define the folder for EJS templates
app.set("views", path.join(__dirname, "views"));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Define the port for the application
const port = 3000;

// Mock database or user data (this would typically come from a database)
const users = [
    { name: "Alice", age: 25, favoriteColor: "blue" },
    { name: "Bob", age: 30, favoriteColor: "green" },
    { name: "John", age: 35, favoriteColor: "red" },
];

// Define a route to render the user details
app.get("/user/:id", (req, res) => {
    // Extract the user ID from the route parameter
    const userId = parseInt(req.params.id);

    // Find the user by ID (simulating a database lookup)
    const user = users[userId];

    if (user) {
        // Destructure and rename the properties of the user object
        const { name: firstName, age: yearsOld, favoriteColor: color } = user;

        // Render the EJS template and pass the destructured variables
        res.render("user", { firstName, yearsOld, color });
    } else {
        // Handle cases where the user is not found
        res.status(404).send("<h1>User Not Found</h1>");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
