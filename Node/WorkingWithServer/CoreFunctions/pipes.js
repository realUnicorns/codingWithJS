var http = require("http");
var fs = require("fs");
var readStream = fs.createReadStream("../coreModules/readme.txt");
var writeStream = fs.createWriteStream("./writeStream.txt");


//Reading the buffer with pipe
readStream.pipe(writeStream);