// Import Axios, a popular library for making HTTP requests in Node.js
const axios = require('axios');

// Replace 'YOUR_API_KEY' with your actual OpenAI API key
const API_KEY = 'YOUR_API_KEY';

// The endpoint URL for the OpenAI API
const API_URL = 'https://api.openai.com/v1/chat/completions';

// Define a function to call the OpenAI ChatGPT API
async function callChatGPT(prompt) {
    try {
        // Prepare the request data as per the API documentation
        const data = {
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
        };

        // Use axios to make a POST request to the API
        const response = await axios.post(API_URL, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        // Log the entire response to understand its structure
        console.log("Full Response:", response.data);

        // Extract and return the generated response from the assistant
        const message = response.data.choices[0].message.content;
        console.log("ChatGPT Response:", message);
        return message;

    } catch (error) {
        // Catch any errors and log them for debugging
        if (error.response) {
            console.error("API responded with an error:", error.response.status, error.response.data);
        } else {
            console.error("Error in request:", error.message);
        }
    }
}

// Example usage
callChatGPT("What is the purpose of APIs in software development?");
