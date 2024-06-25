const express = require('express');

// require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

const port = 5000; // process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});