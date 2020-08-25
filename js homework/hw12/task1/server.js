const http = require("http");
const url = require("url");
const querystring = require("querystring");
const static = require("node-static");
const file = new static.Server('.');


function accept(req, res) {

  if (req.url == "/vote") {
      res.end("Your vote accepted: " + new Date());
  } else {
    file.serve(req, res);
  }

}


if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}
