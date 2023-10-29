const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end('welcome to home page');
    }
    else if(req.url === '/contact'){
        res.end("this is contact page");

    }
    else{
        res.end(`
        <h1>404 page not found</h1>
        `);
    }

});

server.listen(5000);
console.log("server startin on port 5000...");