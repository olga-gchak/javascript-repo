const http = require("http");

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  const os = require('os');
  const path = require('path');
  
  response.end("<h1> System information</h1> Current user name: " + os.userInfo().username + "<br/>" + "OS type: " + os.type() +
  "<br/>" + "System work time: " + os.uptime() + "<br/>" + "Current work directory: " + path.dirname(__filename) + "<br/>" + "Server file name: " + 
  path.basename(__filename));
}).listen(5000);
