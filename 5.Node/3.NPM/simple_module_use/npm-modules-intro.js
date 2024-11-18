// *** Demonstrating the Use of npm Modules with Node.js ***
// This script showcases how to use npm modules in a Node.js project.
// We'll demonstrate two popular npm modules: 'sillyname' and 'superheroes'.
// Both modules generate fun names, but they serve different purposes.

// Importing the 'sillyname' module using ES6 syntax.
import generateName from "sillyname";

// Generate a silly name and store it in the 'sillyName' variable.
const sillyName = generateName();

// Print the generated silly name to the console.
console.log(`My name is ${sillyName}.`);
// Example Output: "My name is Dr. Fluffy Pants."

// Importing the 'superheroes' module using ES6 syntax.
import superheroes from "superheroes";

// Generate a random superhero name and store it in the 'superheroName' variable.
const superheroName = superheroes.random();

// Print the generated superhero name to the console.
console.log(`I am ${superheroName}!`);
// Example Output: "I am Spider-Man!"

// *** Additional Example: Combining Modules ***
// This block demonstrates how to combine the functionality of multiple npm modules to create more interesting outputs.

// Importing another popular npm module: 'chalk' for colorful console output.
import chalk from "chalk";

// Combine the silly name and superhero name into a single fun statement.
const funMessage = `Hello! My silly name is ${sillyName}, but secretly... I am ${superheroName}!`;

// Print the fun message to the console in a styled and colorful way using 'chalk'.
console.log(chalk.blue.bold(funMessage));
// Example Output (in blue bold text): "Hello! My silly name is Dr. Fluffy Pants, but secretly... I am Spider-Man!"

// *** Explanation of npm Modules Used: ***
// - `sillyname`: Generates random and humorous names.
//   https://www.npmjs.com/package/sillyname
// - `superheroes`: Provides random superhero names.
//   https://www.npmjs.com/package/superheroes
// - `chalk`: Styles console output with colors and text formatting.
//   https://www.npmjs.com/package/chalk

// *** To Run This Script: ***
// 1. Ensure Node.js is installed on your system.
// 2. Initialize a new project by running `npm init -y` in your terminal.
// 3. Install the required npm modules by running:
//    npm install sillyname superheroes chalk
// 4. Run this script using `node npm-modules-intro.js`.
