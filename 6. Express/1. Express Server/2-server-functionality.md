# **Server Functionality**

### **Endpoints**
1. **Root Route (`/`)**
   - **Description**: Displays a welcome message.
   - **How to Use**: Visit `http://localhost:3000/` in your browser.
   - **Response**:
     ```
     Hello, welcome to my first Express server!
     ```

2. **API Route (`/api/data`)**
   - **Description**: Returns a sample JSON object, simulating an API.
   - **How to Use**: Visit `http://localhost:3000/api/data` in your browser or use tools like Postman.
   - **Response**:
     ```json
     {
       "message": "Welcome to the API",
       "data": [1, 2, 3, 4]
     }
     ```

3. **Dynamic Route (`/hello/:name`)**
   - **Description**: Personalizes the response based on the provided name in the URL.
   - **How to Use**: Replace `:name` with your name in the URL, e.g., `http://localhost:3000/hello/John`.
   - **Response**:
     ```
     Hello, John!
     ```

4. **Fallback Route (404)**
   - **Description**: Handles undefined paths and provides a 404 error message.
   - **How to Use**: Visit any undefined route, e.g., `http://localhost:3000/undefined`.
   - **Response**:
     ```
     Oops! The page you're looking for doesn't exist.
     ```

---
