const http2 = require('http2');
const fs = require('fs');

// Paths to your SSL certificate and key
const sslOptions = {
    key: fs.readFileSync('/var/www/apps/ssl/privkey.pem'),
    cert: fs.readFileSync('/var/www/apps/ssl/fullchain.pem')
};

const HTTP_PORT = 443; // Standard HTTPS port

// Create HTTP/2 server with secure connection
const server = http2.createSecureServer(sslOptions, (req, res) => {
    if (req.method === 'OPTIONS') {
        // Handle preflight requests
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        });
        res.end(JSON.stringify({ message: 'Preflight response' }));
    } else if (req.url === '/apps/cors/test') {
        // Handle actual requests
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ message: 'Connection successful' }));
    } else {
        // Handle unknown routes
        res.writeHead(404);
        res.end('Not Found');
    }
});

// Start the server
server.listen(HTTP_PORT, () => {
    console.log(`HTTP/2 server running on https://localhost:${HTTP_PORT}`);
});
