var video;
var button;
var ss = [];
var counter = 0;

function setup() {
  createCanvas(640, 600);
  background(50);
  video = createCapture(VIDEO, ready);
  video.size(320, 240);
  createP(" ");
  button = createButton("Snap");
  button.mousePressed(takeSpan);
  setInterval(takeSpan, 500);
}

var go = false;

function ready() {
  go = true;
}

function takeSpan() {
  ss.push(video.get());
}

function draw() {
  if (go) {
    ss[counter] = video.get();
    counter++;
    if (counter >= 90) {
      counter = 0;
    }
  }
  var w = 80;
  var h = 60;
  var x = 0;
  var y = 0;

  for (var i = 0; i < ss.length; i++) {
    image(ss[i], x, y, w, h);
    x += w;
    if (x > width) {
      x = 0;
      y += h;
    }
  }

}