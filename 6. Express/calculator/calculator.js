// Import the Express library
const express = require('express');

// Create a new Express application
const app = express();

// Add this line to parse the request body
app.use(express.urlencoded({ extended: true }));

// Define a simple route that responds with "Hello, world!"
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html"); // el doble barra baja te dice que busque en la carpeta en la que está 
});

app.post('/', (req, res) => {
    res.send(`Thanks for posting!!!!!!!!!!!!!!!!!!`);
});

app.post('/calculate', (req, res) => {
    const weight = parseFloat(req.body.num1);
    const height = parseFloat(req.body.num2);
    const bmi = weight * 10000 / Math.pow(height, 2);

    res.send(`Your weignt ${weight} and your height is ${height} so your  BMI is: ${bmi.toFixed(3)} from ${bmi.toFixed(2)}`);
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

