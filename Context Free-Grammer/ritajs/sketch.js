var rg;
var button;

function setup() {
  noCanvas();

  rg = new RiGrammar();
  rg.loadFrom('grammar.json', () => {
    console.log('Haiku is ready to be created');
  });

  button = createButton('generate');
  button.mousePressed(newHaiku);
}

function newHaiku() {
  var result = rg.expand();
  createP(result);
}