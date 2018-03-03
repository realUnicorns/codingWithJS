var http = require("http");
var fs = require("fs");

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
    //to send text "text/plain"
    //to send html "text/html"
    //to send json "application/json"
  });
  var readStream = fs.createReadStream("./sketch/index.html");
  readStream.pipe(res);
  //res.end();
}).listen(3000, "127.0.0.1");