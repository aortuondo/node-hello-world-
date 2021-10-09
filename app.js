var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('!Hola mundo!".'\n\n'."Version NodeJS: '+ process.version);				
});
server.listen(3000);

