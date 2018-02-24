var video;
var vscale = 16;

function setup() {
  createCanvas(640, 480);
  background(50);
  video = createCapture(VIDEO);
  video.size(width / vscale, height / vscale);
}

function draw() {

  video.loadPixels();
  loadPixels();
  for (var x = 0; x < video.width; x++) {
    for (var y = 0; y < video.height; y++) {
      var index = (x + y * video.width) * 4;
      var r = video.pixels[index];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var threshold = 127;
      if (bright > threshold) {
        fill(255);
      } else {
        fill(0);
      }
      //var w = map(bright, 0, 255, 0, vscale);
      // fill(bright);
      noStroke();
      rectMode(CENTER);
      rect(x * vscale, y * vscale, vscale, vscale);
    }
  }
}