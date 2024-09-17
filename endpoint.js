const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// PostgreSQL client setup
const client = new Client({
  user: 'app',
  host: 'localhost',
  database: 'app',
  password: 'app',
  port: 5432,
});

// Connect to PostgreSQL
client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

// Test connection route
app.get('/apps/mysql/test', async (req, res) => {
  try {
    await client.query('SELECT NOW()');
    res.json({ message: 'Connection successful' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to connect' });
  }
});

// Create endpoint - insert a name-value pair
app.post('/apps/mysql/create', async (req, res) => {
  const { name, value } = req.body;  // Expecting {"name": "value"}
  if (!name || !value) {
    return res.status(400).json({ error: 'Name and value required' });
  }
  try {
    await client.query('INSERT INTO your_table_name (name, value) VALUES ($1, $2)', [name, value]);
    res.json({ message: 'Record created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error inserting record' });
  }
});

// Read endpoint - fetch fields based on id and specified fields
app.get('/apps/mysql/read/:id/:fields*', async (req, res) => {
  const { id } = req.params;
  const fields = req.params.fields.split('/');  // Get all fields after /id
  if (!id || fields.length === 0) {
    return res.status(400).json({ error: 'ID and fields required' });
  }
  try {
    const fieldNames = fields.join(', ');
    const result = await client.query(`SELECT ${fieldNames} FROM your_table_name WHERE id = $1`, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching record' });
  }
});

// Update endpoint - update record by id with payload
app.put('/apps/mysql/update/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;  // Expecting a JSON payload like {"name": "newValue"}
  if (!id || Object.keys(updates).length === 0) {
    return res.status(400).json({ error: 'ID and updates required' });
  }

  const updateFields = Object.keys(updates)
    .map((key, index) => `${key} = $${index + 2}`)
    .join(', ');

  const values = [id, ...Object.values(updates)];

  try {
    await client.query(`UPDATE your_table_name SET ${updateFields} WHERE id = $1`, values);
    res.json({ message: 'Record updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error updating record' });
  }
});

// Delete endpoint - delete record by id
app.delete('/apps/mysql/delete/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'ID required' });
  }
  try {
    await client.query('DELETE FROM your_table_name WHERE id = $1', [id]);
    res.json({ message: 'Record deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting record' });
  }
});

// Start the server and listen on port 3000
const port = 15012;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}/apps/mysql/test`);
});
