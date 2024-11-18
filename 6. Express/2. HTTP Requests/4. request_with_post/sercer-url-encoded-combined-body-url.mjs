// Import Express
import express from "express";

// Initialize Express App
const app = express();

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true })); // Parses form submissions
app.use(express.json()); // Parses JSON bodies

// Define the port
const port = 3000;

// POST route that processes data from both query and body
app.post("/submit-combined", (req, res) => {
    // Access data from both req.body and req.query
    const bodyData = req.body;
    const queryData = req.query;

    console.log("Body data received:", bodyData);
    console.log("Query string data received:", queryData);

    // Combine data from both sources
    // Combine data from both body (req.body) and query (req.query)
    const combinedData = {
        /**
         * For `name`:
         * - If both `bodyData.name` and `queryData.name` exist:
         *    - Compare them lexicographically (alphabetical order).
         *    - Pick the larger one.
         * - If only one exists (either in body or query):
         *    - Use the one that exists.
         * - If neither exists:
         *    - The result will be `undefined`.
         */
        name: bodyData.name && queryData.name // Check if both `name` values are present
            ? bodyData.name > queryData.name // Compare lexicographically: `>` compares strings
                ? bodyData.name // If `bodyData.name` is larger, use it
                : queryData.name // Otherwise, use `queryData.name`
            : bodyData.name || queryData.name, // If only one exists, use it (fallback logic)

        /**
         * For `age`:
         * - If both `bodyData.age` and `queryData.age` exist:
         *    - Convert both to numbers using `parseInt()`.
         *    - Use `Math.max()` to pick the larger number.
         * - If only one exists (either in body or query):
         *    - Use the one that exists.
         * - If neither exists:
         *    - The result will be `undefined`.
         */
        age: bodyData.age && queryData.age // Check if both `age` values are present
            ? Math.max(parseInt(bodyData.age), parseInt(queryData.age)) // Compare numerically
            : bodyData.age || queryData.age, // If only one exists, use it (fallback logic)
    };


    // Respond back to the client
    res.send({
        message: "Data processed from both body and query successfully",
        combinedData,
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
