require('dotenv').config();

const express = require('express');
const pool = require('./db/pool')

const app = express();

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
  const body = req.body;
  const { name, email, age } = body
  if (!name || !email || !age) {
    res.status(400).json({message: 'Bad request'})
    return
  }
  try {
    // await pool.query(
    //   `insert into users (name, email, age) values ("${name}", "${email}", ${age})` // SQL Injection, don't do it
    // )
    await pool.query(
      "insert into users (name, email, age) values (?, ?, ?)",
      [name, email, age]
    );
    res.status(204).send()
  } catch (err) {
    res.status(500).json({ message: 'Problem' })
  }
})

// Promise version:
// app.get('/user', (req, res) => {
//   // Return all entries from the users table in the DB
//   pool.query('select * from users', (err, result) => {
//     res.json(result);
//     // TODO: err
//   })
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});