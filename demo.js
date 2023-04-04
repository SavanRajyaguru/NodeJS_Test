const http = require('http');

http.createServer((req, res) => {
    console.log("URL>>>> ",req.url);
    if(req.url === '/home'){
        res.write('Welcome to home page');
        res.end();
    }
    if(req.url === '/about'){
        res.write('Here is short history');
        res.end();
    }
    // res.end('<h1> HELLO WORLD </h1>');
}).listen(3000, console.log("Server is running..."));