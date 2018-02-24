var url1 = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var url2 = "&q=";


function setup() {
  noCanvas();
  var button = select("#button");
  var input = select("#input");
  button.mousePressed(() => {
    var url = url1 + apiKey + url2 + input.value();
    loadJSON(url, gotData);
  });
  input.changed(() => {
    var url = url1 + apiKey + url2 + input.value();
    loadJSON(url, gotData);
  });
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }

}