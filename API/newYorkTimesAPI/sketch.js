var url1 = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var url2 = "&api-key=99cfea65a5bb30650b3d31eb1713233e:15:73386102";

function setup() {
  noCanvas();
  var button = select("#button");
  var input = select("#input");
  button.mousePressed(() => {
    url = url1 + input.value() + url2;
    loadJSON(url, gotData);
  });
}

function gotData(data) {
  var articles = data.response.docs;

  for (var i = 0; i < articles.length; i++) {
    createElement('h1', articles[i].headline.main);
    createP(articles[i].snippet);
  }
}