// file.js
// npm install express pg
// node file.js &
// ps aux | grep node
// kill <PID>
const express = require('express');
const { Client } = require('pg');

const app = express();

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

// Define the route with the path you want to use
app.get('/apps/mysql/test', async (req, res) => {
  try {
    // Perform a simple query to verify the database connection
    await client.query('SELECT NOW()');
    res.json({ message: 'Connection successful' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to connect' });
  }
});

// Start the server and listen on port 3000
const port = 15012;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}/apps/mysql/test`);
});

//root@blog:/var/www/apps/mysql# npm install express pg
//added 79 packages, and audited 80 packages in 4s
//13 packages are looking for funding
  //run `npm fund` for details
//found 0 vulnerabilities
//root@blog:/var/www/apps/mysql#






