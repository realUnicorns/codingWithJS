//If we say Random(100) it will always give us a random number between 0 and 100.
//If we use Perlin Noise and say noise(100) the random value will always remail constant untill and unless we refresh the page. And also it always gives us the result between 0 and 1.

var xoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  var x = map(noise(xoff), 0, 1, 0, width);
  xoff += 0.005;
  background(50);
  ellipse(x, height / 2, 24, 24);
}