function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCapture(VIDEO);
}

var angle = 0;
var cam;
var kitten;

function draw() {
  background(50);
  angle += 0.01;
  directionalLight(255, 255, 255, 1, 1, 1);
  directionalLight(255, 255, 255, -1, -1, -1);
  //specularMaterial(255, 0, 255);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  texture(cam);
  box(300);


}

function preload() {
  kitten = loadImage("well.jpg");
}