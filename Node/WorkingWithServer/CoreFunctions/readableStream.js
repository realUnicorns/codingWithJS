var http = require("http");
var fs = require("fs");
var readStream = fs.createReadStream("../coreModules/readme.txt");

readStream.on("data", (data) => {
  console.log(data);
});