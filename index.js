// index.js

const express = require('express');

// Initialize Express app
const app = express();
const PORT = 8000;

const loggerMiddleware = (req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next(); // Proceed to the next middleware or route
  };
// Users array to return as JSON
const users = [
  { id: 1, firstName: 'Alice', email: 'alice@example.com', lastName:'cook',phone:'312412'},
  { id: 2, name: 'Bob', email: 'bob@example.com',lastName:'builder',phone:'2452' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com',lastName:'chaplein',phone:'6437' }
];

// Apply middleware specifically to the /api/users route
app.get('/api/users', loggerMiddleware, (req, res) => {
  res.status(200).json(users); // 200 OK
});

// Handle invalid routes with a 404 status code
app.use((req, res) => {
  res.status(404).json({ error: 'Resource not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
