const http = require('http');
const dt = require('./personalmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Date of request: " + dt.greeting());
  res.end();
}).listen(8000);