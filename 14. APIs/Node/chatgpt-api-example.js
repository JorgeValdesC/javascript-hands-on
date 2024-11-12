// Import required packages
require('dotenv').config(); // Load environment variables from .env file
const axios = require('axios'); // Axios is used for making HTTP requests

// Read the API key from environment variables
const API_KEY = process.env.OPENAI_API_KEY;

// Check if API key is loaded correctly
if (!API_KEY) {
    console.error("API key is missing! Make sure it's correctly defined in the .env file as OPENAI_API_KEY.");
    process.exit(1); // Exit the program if API key is not available
} else {
    console.log("API Key loaded successfully:", API_KEY.slice(0, 8) + "..."); // Display partial API key for confirmation
}

// Define the API endpoint for OpenAI
const API_URL = 'https://api.openai.com/v1/chat/completions';

// Define an asynchronous function to call the OpenAI API
async function callChatGPT(prompt) {
    try {
        // Data object contains model info and prompt, as required by OpenAI's API
        const data = {
            model: "gpt-3.5-turbo-1106", // Switch to an available model
            messages: [{ role: "user", content: prompt }],
        };


        // Send a POST request to OpenAI's API endpoint
        const response = await axios.post(API_URL, data, {
            headers: {
                'Content-Type': 'application/json', // Indicates JSON data format
                'Authorization': `Bearer ${API_KEY}` // API key for authorization
            }
        });

        // Print the entire response object to understand its structure
        console.log("Full Response:", response.data);

        // Extract and display the assistant's response text
        const message = response.data.choices[0].message.content;
        console.log("ChatGPT Response:", message);
        return message;

    } catch (error) {
        // Handle different types of errors

        // If there is an API response error (like a 400 or 401), display status and data
        if (error.response) {
            console.error("API Error:", error.response.status, error.response.data);
        } else {
            // If there’s another type of error (like a network error), display the message
            console.error("Request Error:", error.message);
        }
    }
}

// Example usage of the function, passing in a sample prompt
callChatGPT("What are some best practices for using APIs?");
