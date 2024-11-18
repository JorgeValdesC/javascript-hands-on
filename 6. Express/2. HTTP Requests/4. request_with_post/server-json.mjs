// Import Express
import express from "express";

// Initialize Express App
const app = express();

// Middleware to parse JSON data
app.use(express.json()); // Parses application/json requests

// Define the port
const port = 3000;

// POST route
app.post("/submit", (req, res) => {
    // Access the data sent in the request body
    const data = req.body;

    // Log the data for debugging
    console.log("Data received:", data);

    // Respond back to the client with the received data
    res.send({ message: "Data received successfully", receivedData: data });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
