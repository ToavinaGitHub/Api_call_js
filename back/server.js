const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body "Hello, World!"
    res.end('Hello, World!\n');
});

// Server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
