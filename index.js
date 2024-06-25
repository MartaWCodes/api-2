const express = require('express');
const mysql = require('mysql2/promise');

// require('dotenv').config();

const app = express();

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'customer'
})

app.use(express.json());

app.get('/user', async (req, res) => {
  try {
    const [result] = await pool.query('select * from users')
    res.json(result)
  } catch (err) {
    res.status(500).json({ message: 'Problem' })
  }
})

app.post('/user', async (req, res) => {
  res.json({ok: 'yes'})
})

// Promise version:
// app.get('/user', (req, res) => {
//   // Return all entries from the users table in the DB
//   pool.query('select * from users', (err, result) => {
//     res.json(result);
//     // TODO: err
//   })
// });

const port = 5000; // process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});