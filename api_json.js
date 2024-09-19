const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

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

// Function to fetch table structure and save to a file
async function fetchAndSaveTableStructure() {
    try {
        // Query to retrieve all table names and their structure
        const tablesQuery = `
            SELECT table_name, column_name, data_type
            FROM information_schema.columns
            WHERE table_schema = 'public'
            ORDER BY table_name, ordinal_position;
        `;

        // Execute the query
        const result = await client.query(tablesQuery);

        // Initialize the structure object
        const structure = {};

        // Loop through the results and organize them by table as objects
        result.rows.forEach(row => {
            if (!structure[row.table_name]) {
                structure[row.table_name] = {};
            }
            structure[row.table_name][row.column_name] = {
                data_type: row.data_type
            };
        });

        // Prepare the JSON object
        const jsonOutput = {
            message: 'Connection successful',
            tables: structure
        };

        // Define the file path
        const filePath = '/var/www/apps/source/api_json.json';

        // Write the JSON to the file, overwriting it if it already exists
        fs.writeFileSync(filePath, JSON.stringify(jsonOutput, null, 2));

        console.log(`File saved at ${filePath}`);

    } catch (error) {
        console.error('Error querying database or writing file:', error);
    } finally {
        // Close the database connection
        await client.end();
    }
}

// Execute the function
fetchAndSaveTableStructure();


