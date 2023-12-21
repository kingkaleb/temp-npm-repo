const http = require('http');

// req for incoming request and res is the response
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Here is our short history');
    } else {
        res.end(`
            <h1> Oops! </h1>
            <p>Sorry but we couldn't find what you were looking for</p>
            <a href="/"> back home </a>
        `);
    }
});

server.listen(5000);
