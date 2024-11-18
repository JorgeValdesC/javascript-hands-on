# **Code Breakdown**

This section provides a detailed breakdown of the server code, explaining each part and its purpose.

---

### **Importing Express**
```javascript
import express from "express";
```
- This imports the **Express** framework into the application.
- Express provides tools to define routes, handle requests, send responses, and manage middleware.

---

### **Creating an Express Application**
```javascript
const app = express();
```
- `app` is an instance of the Express application.
- This instance acts as the central object for defining routes and applying middleware.

---

### **Defining a Port**
```javascript
const port = 3000;
```
- Sets the port where the server will listen for incoming requests.
- Commonly used ports for local development include **3000**, **4000**, and **8080**.

---

### **Routes**

#### **Root Route**
```javascript
app.get("/", (req, res) => {
  res.send("Hello, welcome to my first Express server!");
});
```
- Handles **GET** requests sent to `/`.
- Sends a plain text response (`"Hello, welcome to my first Express server!"`).

---

#### **API Route**
```javascript
app.get("/api/data", (req, res) => {
  res.json({
    message: "Welcome to the API",
    data: [1, 2, 3, 4],
  });
});
```
- Returns a **JSON object** containing a message and an array of data.
- JSON is a common format for APIs to exchange information.

---

#### **Dynamic Route**
```javascript
app.get("/hello/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});
```
- Accepts a **dynamic parameter** (`:name`) in the URL.
- Extracts the parameter from the request and uses it in the response.

---

#### **Fallback Route**
```javascript
app.use((req, res) => {
  res.status(404).send("Oops! The page you're looking for doesn't exist.");
});
```
- This route catches all undefined paths.
- Returns a **404 status code** with an error message.

---

### **Starting the Server**
```javascript
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```
- Starts the server and listens for incoming requests on the specified port.
- Logs a message in the terminal to confirm the server is running.

---
