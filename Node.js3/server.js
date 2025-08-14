const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Welcome to the World of node server!");
    res.end();
})
server.listen(8080, () => {
    console.log('Server is running on port 8080');
})