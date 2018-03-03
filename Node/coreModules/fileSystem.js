var fs = require("fs");
var result = fs.readFileSync("readme.txt", "utf8");
console.log(result);
fs.writeFileSync("writeme.txt", result);

//To delete a file we will use fs.unlink("Dir_Location/Dir_Name");
//Creating a Directory is done by mkdirSync or mkdir("Dir_Location/Dir_Name");
//Removing a Directory  fs.rmdir("Dir_Location/Dir_Name");
// Asyncronization requires a callback