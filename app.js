
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    }

    if (req.url === '/hello'){
        res.write('Hello Eshan!');
        res.end();
    }

});

server.listen(3000)

console.log("Listening on port 3000...");
