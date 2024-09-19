// api_endpoint_json.js
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// URL to fetch data from
const apiUrl = 'http://193.149.164.45:15013/apps/mysql/api';

// Function to fetch JSON from URL and save to file
async function fetchAndSaveJson() {
    try {
        // Make a GET request to the URL
        const response = await axios.get(apiUrl);

        // Get the JSON response body
        const jsonResponse = response.data;

        // Define the absolute file path
        const filePath = '/var/www/apps/source/api_endpoint_json.json';

        // Write the JSON to the file, overwriting it if it exists
        fs.writeFileSync(filePath, JSON.stringify(jsonResponse, null, 2));

        console.log(`JSON response saved at ${filePath}`);
    } catch (error) {
        console.error('Error fetching or writing JSON:', error);
    }
}

// Execute the function
fetchAndSaveJson();




