var story = {
  "start": "#[hero:#character#]story#",
  "character": ["dragon", "unicorn", "rainbow"],
  "story": "A #adj# #hero.capitalize# fights the #adj# monster. Go #hero# go!",
  "adj": ["dark", "sleepy", "quiet"]
}

var grammar;

function setup() {
  noCanvas();
  var button = createButton("See a Story");
  button.mousePressed(() => {
    grammar = tracery.createGrammar(story);
    var result = grammar.flatten("#start#");
    createP(result);
  });
}