const express = require('express');

// require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/user', (req, res) => {
  // Return all entries from the users table in the DB
  res.json({
    message: 'TODO',
  });
});

const port = 5000; // process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});