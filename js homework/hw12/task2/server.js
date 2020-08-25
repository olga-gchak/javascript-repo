const http = require("http");
const url = require("url");
const static = require("node-static");
const file = new static.Server(".", {
    cache: 0
});

function accept(req, res) {
    if(req.url == "books.json") {
        file.serve(req, req);
    } else {
        file.serve(req, res);
    }
}

if (!module.parent) {
    http.createServer(accept).listen(8080);
    console.log("Server runnind at http://localhost:8080");
}