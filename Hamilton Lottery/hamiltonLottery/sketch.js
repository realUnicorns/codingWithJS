var probabilaty = 5000;
var started = false;
var result;
var lost = 0;

function setup() {
  noCanvas();
  var button = select("#start");
  button.mousePressed(() => {
    started = true;
  });
  result = select("#results");
}

function draw() {
  if (started) {
    var r = floor(random(5000));
    if (r == 77) {
      result.html("You Won");
      noLoop();
    } else {
      lost++;
      result.html("You Lost " + lost + " times.");
    }
  }

}