// Import Express
import express from "express";

// Initialize Express App
const app = express();

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Define the port
const port = 3000;

// POST route
app.post("/submit-form", (req, res) => {
    // Access the data sent in the request body
    const formData = req.body;

    // Log the data for debugging
    console.log("Form data received:", formData);

    // Respond back to the client with the received data
    res.send({ message: "Form submitted successfully", receivedData: formData });
});

app.post("/submit-form-url", (req, res) => {
    // Access query string data
    const queryData = req.query;

    // Log the data
    console.log("Query string data received:", queryData);

    // Respond back to the client
    res.send({ message: "Query string data received successfully", receivedData: queryData });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});