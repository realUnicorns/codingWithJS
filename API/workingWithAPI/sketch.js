var weather;

function setup() {
  createCanvas(400, 200);
  loadJSON('http://api.openweathermap.org/data/2.5/forecast?q=Tokyo,jp&APPID=d36259555ac41e8669bffebfb2bf287e&units=metric', gotData);

}

function gotData(data) {
  weather = data;
}

function draw() {
  background(0);
  if (weather) {
    fill(255);
    ellipse(100, 100, weather.list[0].main.temp, weather.list[0].main.temp);
    ellipse(300, 100, weather.list[0].main.humidity, weather.list[0].main.humidity);
  }
}