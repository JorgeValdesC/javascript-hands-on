// Import the Express module
import express from "express";
import path from "path";
import { fileURLToPath } from "url"; // To recreate __dirname in ESM

// Create an instance of an Express application
const app = express();

// Define the port number for the server to listen on
const port = 3000;

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the directory where EJS templates are located
app.set("views", path.join(__dirname, "views")); // Templates are in the 'views' folder

// Serve static files (e.g., CSS, JS, images) from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

/**
 * Route: "/"
 * Method: GET
 * Description: Renders the "index.ejs" template with a dynamic title and message.
 */
app.get("/", (req, res) => {
    res.render("index", { title: "Home", message: "Welcome to the Home Page!" });
});

/**
 * Route: "/about"
 * Method: GET
 * Description: Renders the "about.ejs" template with dynamic content.
 */
app.get("/about", (req, res) => {
    res.render("about", { title: "About Me", name: "Angela", description: "This is the About page." });
});

/**
 * Route: "/contact"
 * Method: GET
 * Description: Renders the "contact.ejs" template with contact information.
 */
app.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact Me", phone: "+44123456789" });
});

/**
 * Middleware to handle 404 errors for undefined routes.
 * Description: Renders a "404.ejs" template for unmatched routes.
 */
app.use((req, res) => {
    res.status(404).render("404", { title: "404 - Not Found" });
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
