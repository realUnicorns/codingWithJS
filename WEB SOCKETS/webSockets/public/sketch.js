var socket;

function setup() {
  createCanvas(500, 500);
  background(50);
  socket = io.connect("http://localhost:3000");
  socket.on("mouse", (data) => {
    noStroke();
    fill(255, 0, 255);
    ellipse(data.x, data.y, 25, 25);
  });
}

function mouseDragged() {
  console.log("Sending : " + mouseX, mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit("mouse", data);
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 25, 25);
}