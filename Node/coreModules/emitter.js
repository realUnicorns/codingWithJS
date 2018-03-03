var events = require("events");
var eE = new events.EventEmitter();
eE.on("Well", (msg) => {
  console.log(msg);
});

eE.emit("Well", "It was emitted");