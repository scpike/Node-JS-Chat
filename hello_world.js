var http = require('http');
var host="192.168.0.134";
var port = "8124";
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, host);
console.log('Server running at ' + host  + ':' + port);