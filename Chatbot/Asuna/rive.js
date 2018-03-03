let speech;
let speaking = false;
let xoff = 0;
let speechRec;
let bot;
let voi = "Microsoft Zira Desktop - English (United States)";
//let voi = "Google 日本語";
let pit = 2;
let output;

function setup() {
  let canvas = createCanvas(200, 200);
  speech = new p5.Speech();
  speechRec = new p5.SpeechRec("en-US", triggerSpeach);
  bot = new RiveScript();
  speechRec.start(true);
  let asuna = select("#Asuna");
  asuna.child(canvas);
  speech.started(() => {
    speaking = true;
  });
  speech.ended(() => {
    speaking = false;
    xoff = 0;
  });
  bot.loadFile(["RiveScript/brain.rive", "RiveScript/begin.rive", "RiveScript/rpg.rive"], (batchNum) => {
    console.log("Batch #" + batchNum + " is ready.");
  }, (err) => {
    console.log("You have an error while loading : " + err);
  });
  let button = select("#submit");
  let userinput = select("#userinput");
  output = select("#output");

  button.mousePressed(() => {
    let input = userinput.value();
    bot.sortReplies();
    let reply = bot.reply("local-user", input);
    speech.setPitch(pit);
    speech.setVoice(voi);
    speech.speak(reply);
    output.html(reply);
  });
}

function triggerSpeach() {
  let input = speechRec.resultString;
  bot.sortReplies();
  let reply = bot.reply("local-user", input);
  speech.setPitch(pit);
  speech.setVoice(voi);
  speech.speak(reply);
  output.html(reply);
}

function draw() {
  background(51);
  if (speaking) {
    let level = noise(xoff);
    let size = map(level, 0, 1, 0, 175);
    noStroke();
    fill(255, 100);
    ellipse(width / 2, height / 2, size);
    fill(255);
    ellipse(width / 2, height / 2, size / int(random(2, 4)));
    fill(255, 0, 255);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(45);
    text("Asuna", width / 2, height / 2);
    xoff += 0.05;
  }
}