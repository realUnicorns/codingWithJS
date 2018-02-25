var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(50);
  //ambientLight(255, 255, 255); //It shines from all the sides with no shadow.
  directionalLight(255, 255, 255, 1, 1, 1); //Directional light
  directionalLight(255, 255, 255, -1, -1, -1);
  //pointLight(255, 255, 255, -200, -200, 0); //Points from a single direction.
  //ambientMaterial(255, 255, 0);  //A meterial
  //normalMaterial(); //Gives a rainbowish color
  specularMaterial(255, 0, 255, 177);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  //fill(255, 0, 255, 100);
  box(200, 200, 200);
  angle += 0.01;

}