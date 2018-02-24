var sketch1 = (p) => {
  p.setup = function() {
    p.createCanvas(300, 300);
  }

  p.draw = function() {
    p.background(50);
    p.ellipse(100, 100, 50, 50);
  }
}

var sketch2 = (p) => {
  p.setup = function() {
    p.createCanvas(300, 300);
  }

  p.draw = function() {
    p.background(55);
    p.ellipse(100, 100, 75, 75);
  }
}

var myp51 = new p5(sketch1);
var myp52 = new p5(sketch2);