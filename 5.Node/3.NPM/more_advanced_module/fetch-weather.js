// *** Weather Fetcher Using Node.js and axios ***
// This script demonstrates the power of Node.js in fetching data from an external API.
// We use the 'axios' npm module for making HTTP requests.
// Make sure you have an API key from OpenWeatherMap (https://openweathermap.org/).

import axios from "axios"; // Importing axios for HTTP requests.
import chalk from "chalk"; // Importing chalk for colorful console output.
import readline from "readline"; // Importing readline for interactive console input.

// Setting up an interactive CLI to get the city name from the user.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Base URL and API key for OpenWeatherMap
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "afeafe8f51c6967608ddf1560653c238"; // Replace with your OpenWeatherMap API key.

// Function to fetch and display weather data for a given city
async function getWeather(city) {
    try {
        console.log(chalk.blue(`Fetching weather data for ${city}...`));

        // Making a GET request to the OpenWeatherMap API
        const response = await axios.get(BASE_URL, {
            params: {
                q: city, // The city for which we want weather data
                appid: API_KEY, // Your API key
                units: "metric", // Use metric units (Celsius)
            },
        });

        // Extracting relevant data from the API response
        const { main, weather, name } = response.data;
        const temperature = main.temp;
        const description = weather[0].description;

        // Displaying the weather data
        console.log(chalk.green(`Current weather in ${name}:`));
        console.log(`Temperature: ${temperature}°C`);
        console.log(`Description: ${description}`);
    } catch (error) {
        // Handling errors, such as invalid city names or API issues
        if (error.response && error.response.status === 404) {
            console.log(chalk.red("City not found. Please try again."));
        } else {
            console.error(chalk.red("An error occurred while fetching weather data."));
        }
    } finally {
        // Closing the readline interface after the request
        rl.close();
    }
}

// Asking the user for a city name
rl.question("Enter a city name to get the current weather: ", (city) => {
    getWeather(city.trim()); // Fetching weather data for the provided city
});
