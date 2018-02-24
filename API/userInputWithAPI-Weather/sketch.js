var weather;
var temp;
var humidity;


var api = 'http://api.openweathermap.org/data/2.5/forecast?q=';
var apiKey = '&APPID=001b0f58045147663b1ea518d34d88b4';
var units = '&units=metric';

var input;

function setup() {
  createCanvas(400, 200);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
  temp = weather.list[0].main.temp;
  humidity = weather.list[0].main.humidity;
  visualize();
}

function visualize() {
  createP("Temperature of " + input.value() + " : " + temp);
  createP("Humidity of " + input.value() + " : " + humidity);
}

function draw() {
  background(0);
  if (weather) {
    ellipse(100, 100, temp, temp);
    ellipse(300, 100, humidity, humidity);
  }
}