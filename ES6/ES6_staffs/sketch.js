//var is function scope. var can be used anywhere inside the function no matter where we initialize it.
//let is block scope. let cant be used anywhere its only available after it have been declared.
//const is same as let just the value of const doesnt change.
var circles = [10, 10, 10, 10, 10, 10];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  for (let circle of circles) {
    fill(50);
    ellipse(random(width), random(height), 20, 20);
  }
}