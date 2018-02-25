function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
var angle = 0;

function draw() {
  background(51);
  fill(255, 0, 255, 100);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  translate(-300, -300);
  box(100, 100, 100);
  translate(-200, -200);
  sphere(100, 100, 100);
  translate(-100, -100);
  plane(100, 100, 100);
  translate(400, 400);
  cone(100, 100, 100);
  translate(100, 100);
  cylinder(100, 100, 100);

  angle += 0.01;
}