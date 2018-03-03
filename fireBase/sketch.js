let database;
let drawing = [];
let currentPath = [];
let isDrawing = false;

function setup() {
  let canvas = createCanvas(200, 200);
  let config = {
    apiKey: "AIzaSyAxLOFVx87TGF9WYpdG8UA0MXmTF50EC4U",
    authDomain: "my-project-dcbc1.firebaseapp.com",
    databaseURL: "https://my-project-dcbc1.firebaseio.com",
    projectId: "my-project-dcbc1",
    storageBucket: "my-project-dcbc1.appspot.com",
    messagingSenderId: "278961152347"
  };
  firebase.initializeApp(config);
  database = firebase.database();

  let ref = database.ref("drawings");
  ref.on("value", (data) => {
    let elt = selectAll(".listing");
    for (var i = 0; i < elt.length; i++) {
      elt[i].remove();
    }
    let drawings = data.val();
    let keys = Object.keys(drawings);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let li = createElement("li", "");
      li.class("listing");
      let ahref = createA("#", key);
      ahref.parent(li);
      ahref.mousePressed(function() {
        let key = this.html();
        let ref = database.ref("drawings/" + key);
        ref.once("value", function(data) {
          let dbdrawing = data.val();
          drawing = dbdrawing;
        }, function(err) {
          console.log(err);
        });
      });
      li.parent("#drawinglist");
    }
  }, err => console.log(err));

  canvas.mousePressed(() => {
    isDrawing = true;
    currentPath = [];
    drawing.push(currentPath);
  });
  canvas.mouseReleased(() => {
    isDrawing = false;
  });
  canvas.parent("#can");
  let button = select("#savei");
  let clearButton = select("#clear");
  clearButton.mousePressed(() => {
    drawing = [];
  });
  button.mousePressed(() => {
    let ref = database.ref("drawings");
    ref.push(drawing);
  });
}

function draw() {
  background(50);

  if (isDrawing) {
    let point = {
      x: mouseX,
      y: mouseY
    }
    currentPath.push(point);
  }

  stroke(255);
  strokeWeight(4);
  noFill();
  for (let i = 0; i < drawing.length; i++) {
    let path = drawing[i];
    beginShape();
    for (let j = 0; j < path.length; j++) {
      vertex(path[j].x, path[j].y);
    }
    endShape();
  }
}