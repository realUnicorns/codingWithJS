var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.createReadStream("./public/index.html").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.createReadStream("./public/contact.html").pipe(res);
  } else if (req.url === "/language/japanese") {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    fs.createReadStream("./public/japanese.json").pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.createReadStream("./public/404.html").pipe(res);
  }
}).listen(3000, "127.0.0.1");