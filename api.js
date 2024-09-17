const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 15013;

// PostgreSQL client setup (adjust credentials as needed)
const client = new Client({
    user: 'app',
    host: 'localhost',
    database: 'app',
    password: 'app',
    port: 5432, // Default PostgreSQL port
});

// Connect to the PostgreSQL database
client.connect();

// Define the route at /apps/mysql/api
app.get('/apps/mysql/api', async (req, res) => {
    try {
        // Query to retrieve all table names and their structure
        const tablesQuery = `
            SELECT table_name, column_name, data_type
            FROM information_schema.columns
            WHERE table_schema = 'public'
            ORDER BY table_name, ordinal_position;
        `;

        //console.log('Endpoint hit'); // Check if this logs when you hit the route
        // Execute the query
        const result = await client.query(tablesQuery);

        // Log the result to check if it contains the expected data
        //console.log('Query Result:', result.rows);
        // Initialize the structure object
        const structure = {};

        // Loop through the results and organize them by table as objects, not arrays
        result.rows.forEach(row => {
            if (!structure[row.table_name]) {
                structure[row.table_name] = {};
            }
            structure[row.table_name][row.column_name] = {
                data_type: row.data_type
            };
        });

        // Send the JSON response
        res.json({
            message: 'Connection successful',
            tables: structure
        });
    } catch (error) {
        console.error('Error querying database:', error);
        res.status(500).json({ message: 'Error querying the database' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


