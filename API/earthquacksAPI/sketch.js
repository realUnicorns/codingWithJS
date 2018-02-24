var maping;
var earthquakes;

var clat = 0;
var clon = 0;

var lat = 35.6895;
var lon = 139.6917;

var zoom = 1;

function preload() {
  //Past hour - https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson
  //Past Day - https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson
  //Past week - https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
  //Past month - https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson
  earthquakes = loadJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");
  maping = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1/1024x512?access_token=pk.eyJ1IjoicHJhc2FudGFrdW4iLCJhIjoiY2pkdDdvaTQ4MDhnaDJxbDMxa3BqdTN6dSJ9.aXeuNaKjPpgOhuY2w-xS9g");
}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}

function setup() {
  createCanvas(1024, 512);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(maping, 0, 0);
  console.log(earthquakes);

  var centerX = mercX(clon);
  var centerY = mercY(clat);

  for (var i = 0; i < earthquakes.features.length; i++) {
    var data = earthquakes.features[i].geometry.coordinates;
    var mag = earthquakes.features[i].properties.mag;
    var lat = data[1];
    var lon = data[0];

    var x = mercX(lon) - centerX;
    var y = mercY(lat) - centerY;
    noStroke();
    fill(255, 0, 255, 200);
    ellipse(x, y, mag, mag);
  }
}