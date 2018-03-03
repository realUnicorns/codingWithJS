var http = require("http");
var fs = require("fs");
var readStream = fs.createReadStream("../coreModules/readme.txt");
var writeStream = fs.createWriteStream("./readme.txt");


//Reading the buffer
readStream.on("data", (data) => {
  console.log(data);
  writeStream.write(data);
});