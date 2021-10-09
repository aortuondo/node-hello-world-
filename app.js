var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello world 2!');				
});
server.listen(3000);

