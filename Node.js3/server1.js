const http = require('http');

const server = http.createServer((req, res) => {
    if(req.ulr == '/about'){
        return res.end('<h1>This is the about page</h1>');
    }else if(req.url == '/contact'){
        return res.end('<h1>Contact Us</h1>');
    }else if(req.url == './news'){
        return res.end('<h1>News Page</h1>');
    } else {
        return res.end('<h1>Welcome to my Main Page</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});