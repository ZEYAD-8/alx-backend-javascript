const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server running');
});

module.exports = app;
// What is the main difference between the two snippets?

// The second snippet uses the Express framework to create a server. 
// Express is a web application framework for Node.js, 
// designed for building web applications and APIs.
// It is more flexible and provides more features 
// than the built-in http module.