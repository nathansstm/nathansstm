const http2 = require('http2');
const fs = require('fs');
const path = require('path');

// Paths to your SSL certificate and key
const sslOptions = {
    key: fs.readFileSync('/var/www/apps/ssl/selfsigned.key'),
    cert: fs.readFileSync('/var/www/apps/ssl/selfsigned.crt')
};

const HTTP_PORT = 443; // Standard HTTPS port

// Create HTTP/2 server with secure connection
const server = http2.createSecureServer(sslOptions, (req, res) => {
    if (req.url === '/apps/cors/test') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({ message: 'Connection successful' }));
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

// Start the server
server.listen(HTTP_PORT, () => {
    console.log(`HTTP/2 server running on https://localhost:${HTTP_PORT}`);
});
