function sum() {
  var add = 0;
  for (var i = 0; i < arguments.length; i++) {
    add += (arguments[i]);
  }
  return add;
}

function setup() {
  noCanvas();
  var add = sum(2, 8, 36, 4, 95, 5);
  createP("Addition : " + add);
}