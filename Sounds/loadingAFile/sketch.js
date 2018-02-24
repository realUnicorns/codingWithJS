var song;
var slider;
var play;
var stop;
var pause;
var fft;
var spectrum;
var wave;
var his = [];

//rate
//pan
function preload() {
  song = loadSound("Jap.mp3");
}


function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
  play = select("#play");
  stop = select("#stop");
  pause = select("#pause");
  fft = new p5.FFT(0.9, 128);
  // wave = new p5.Oscillator();
  // wave.setType("sine");
  // wave.start();
  // wave.apm(0.1);
  // wave.freq(1);
  play.mousePressed(() => {
    song.play();
  });
  stop.mousePressed(() => {
    song.stop();
  });
  pause.mousePressed(() => {
    song.pause();
  });
  slider = createSlider(0, 1, 0, 0.01);
}

function draw() {
  background(50);
  spectrum = fft.analyze();
  his.push(spectrum[7]);
  song.setVolume(slider.value());
  push();
  fill(255, 0, 255, 10);
  ellipseMode(CENTER);
  for (var i = 0; i < spectrum.length; i++) {
    ellipse(200, 200, spectrum[i] * 2);
  }
  pop();
  push();
  stroke(255);
  noFill();
  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = (his[i] / 3) * 2;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();
  if (his.length > 180) {
    his.splice(0, 1);
  }
  pop();
  push();
  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 180);
    var amp = spectrum[i];
    r = map(amp, 0, 256, 20, 100);
    var x = r * cos(angle);
    var y = r * sin(angle);
    stroke(i, 255, 255);
    line(0, 0, x, y);
  }
  endShape();
  pop();
  push();
  // var currentY = r;
  // translate(0, height / 2 - currentY);
  beginShape();
  for (var i = 0; i < his.length; i++) {
    var y = map(his[i] / 150, 0, 1, height / 2, 100);
    noFill();
    vertex(i, y);
  }
  if (his.length > width) {
    his.splice(0, 1);
  }
  stroke(255, 0, 255);
  line(his.length, 0, his.length, height / 2);
  endShape();
  pop();
}