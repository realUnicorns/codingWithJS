function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}

function draw() {
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var index = (x + y * width) * 4;
      pixels[index] = x;
      pixels[index + 1] = y;
      pixels[index + 2] = random(255);
      pixels[index + 3] = 255;
    }
  }
  updatePixels();

}