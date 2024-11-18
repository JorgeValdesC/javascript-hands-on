// *** Node.js Native Modules Showcase with Detailed Comments ***
// This script demonstrates the use of 11 Node.js native modules.
// Each module is carefully explained to help you understand its functionality and output.

const fs = require("fs"); // Filesystem module for working with files.
const os = require("os"); // OS module for interacting with the operating system.
const path = require("path"); // Path module for working with file and directory paths.
const http = require("http"); // HTTP module to create a simple web server.
const url = require("url"); // URL module for parsing and formatting URLs.
const crypto = require("crypto"); // Crypto module for secure cryptographic operations.
const util = require("util"); // Util module for converting callbacks to promises and other utilities.
const querystring = require("querystring"); // Querystring module for working with URL query strings.
const events = require("events"); // Events module to create and handle custom events.
const zlib = require("zlib"); // Zlib module for data compression and decompression.
const readline = require("readline"); // Readline module for interactive command-line input/output.

// *** File Operations: Writing and Reading Files ***
// This block demonstrates how to write to and read from a file using the `fs` module.

// Writing a file asynchronously
fs.writeFile("pepito.txt", "Hello Node", (err) => {
  // `fs.writeFile` writes data to a file.
  // Arguments:
  // - First: File name ('pepito.txt').
  // - Second: Content to write ('Hello Node').
  // - Third: Callback function to handle errors or confirm success.

  if (err) throw err; // Throws an error if the write operation fails.
  console.log("The file 'pepito.txt' has been created with content: Hello Node!");
  // Expected Output: The file 'pepito.txt' has been created with content: Hello Node!
});

// Reading a file asynchronously
fs.readFile("pepito.txt", "utf8", (err, data) => {
  // `fs.readFile` reads data from a file.
  // Arguments:
  // - First: File name ('pepito.txt').
  // - Second: Encoding format ('utf8') to read text files correctly.
  // - Third: Callback function to handle the file's content or errors.

  if (err) throw err; // Throws an error if the read operation fails.
  console.log("File content:", data);
  // Expected Output: File content: Hello Node
});

// *** OS Module: Fetching System Information ***
// This block demonstrates how to retrieve system information using the `os` module.

console.log("OS Platform:", os.platform()); // Prints the operating system platform (e.g., 'win32', 'linux').
console.log("Total Memory:", os.totalmem()); // Prints the total system memory in bytes.
console.log("Free Memory:", os.freemem()); // Prints the available memory in bytes.
console.log("User Info:", os.userInfo()); // Prints the logged-in user's information, including username and home directory.

// *** Path Module: File Path Manipulation ***
// This block demonstrates how to construct and work with file paths using the `path` module.

const filePath = path.join(__dirname, "pepito.txt");
// `path.join` combines multiple path segments into one valid path.
// `__dirname` is a Node.js variable representing the current directory of the script.
console.log("Absolute Path to 'pepito.txt':", filePath);
// Expected Output: The absolute path to the file, e.g., '/Users/username/project/pepito.txt'.

// *** Crypto Module: Generating Secure Random Values ***
// This block demonstrates how to generate secure random values using the `crypto` module.

const randomID = crypto.randomBytes(8).toString("hex");
// `crypto.randomBytes` generates cryptographically secure random data.
// - Argument: Number of bytes to generate (8).
// - `.toString('hex')` converts the random bytes to a hexadecimal string.
console.log("Generated Random ID:", randomID);
// Expected Output: A random hexadecimal string, e.g., '4e5a3f2c7b8d1e6f'.

// *** HTTP Module: Simple Web Server ***
// This block demonstrates how to create a basic HTTP server.

const server = http.createServer((req, res) => {
  // `http.createServer` creates a web server.
  // - The callback is called for every incoming request.
  const parsedUrl = url.parse(req.url, true);
  // `url.parse` breaks the URL into readable parts.
  // The 'true' argument parses the query string into an object.

  res.writeHead(200, { "Content-Type": "text/plain" });
  // Sets HTTP status to 200 (OK) and the content type to plain text.
  res.end(`Hello, your path is: ${parsedUrl.pathname}\nYour random ID is: ${randomID}`);
  // Sends a response to the client, including the parsed path and random ID.
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
  // Expected Output: Opens a web server at http://localhost:3000.
});

// *** Querystring Module: Parsing Query Strings ***
// This block demonstrates how to parse and format URL query strings.

const parsedQuery = querystring.parse("name=John&age=30");
// `querystring.parse` converts a query string into an object.
console.log("Parsed Query:", parsedQuery);
// Expected Output: { name: 'John', age: '30' }

// *** Events Module: Custom Event Emitter ***
// This block demonstrates creating and using a custom event.

const eventEmitter = new events.EventEmitter();
// Creates an EventEmitter instance for custom events.

eventEmitter.on("greet", (name) => {
  // Listens for the 'greet' event and logs a custom message.
  console.log(`Hello, ${name}! Welcome to Node.js!`);
});

eventEmitter.emit("greet", "Student");
// Emits the 'greet' event with the argument 'Student'.
// Expected Output: Hello, Student! Welcome to Node.js!

// *** Zlib Module: Data Compression ***
// This block demonstrates compressing data using the `zlib` module.

const input = "Compress this text with zlib!";
zlib.deflate(input, (err, buffer) => {
  // `zlib.deflate` compresses a string into a smaller format.
  if (err) throw err;
  console.log("Compressed Data:", buffer.toString("base64"));
  // Expected Output: A compressed base64-encoded string, e.g., 'eJxLTEpKzs8tUqzO'.
});

// *** Readline Module: Interactive Console Input ***
// This block demonstrates taking user input from the console.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your favorite Node.js module? ", (answer) => {
  // Asks the user a question and waits for input.
  console.log(`Great choice! You love: ${answer}`);
  rl.close();
  // Expected Interaction: User types input, and the program logs a response.
});

// *** Util Module: Promisifying Functions ***
// This block demonstrates converting callback-based functions into promises.

// const writeFilePromisified = util.promisify(fs.writeFile);
// // `util.promisify` converts a callback-based function (`fs.writeFile`) into a Promise-based one.

// const util = require("util"); // Util module for promisifying functions

// Promisify fs.writeFile to use with Promises
const writeFilePromisified = util.promisify(fs.writeFile);

// Define the directory and file name
const fileDirectory = path.join(__dirname, "files"); // Creates a "files" directory path within the current directory
const filePathExample = path.join(fileDirectory, "async-example.txt"); // Full path for the new file

// Ensure the directory exists before writing the file
fs.mkdir(fileDirectory, { recursive: true }, (err) => {
  if (err) {
    console.error("Error creating directory:", err);
    return;
  }

  // Write the file using the constructed path
  writeFilePromisified(filePathExample, "This file was created using promisified fs!")
    .then(() => console.log(`Async Example File Created at: ${filePathExample}`))
    .catch((err) => console.error("Error writing file:", err));
});


