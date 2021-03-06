var express = require("express");
var app = express();
var server = app.listen(3000);
app.use(express.static("public"));
console.log("Server is on");
var socket = require("socket.io");
var io = socket(server);
io.sockets.on("connection", (socket) => {
  console.log("New connection : " + socket.id);
  socket.on("mouse", (data) => {
    socket.broadcast.emit("mouse", data);
    console.log(data);
  });
});