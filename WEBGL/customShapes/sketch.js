let angle = 0;
let kitten;

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  background(0);
  ambientLight(255);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);
  translate(-50, -50);
  beginShape();
  vertex(-50, 0, 0, 0, 0);
  vertex(100, 0, 0, 1, 0);
  vertex(100, 100, 0, 1, 1);
  vertex(0, 200, 0, 0, 1);
  endShape(CLOSE);

  angle += 0.03;
}