const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define a route for the health check API
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


