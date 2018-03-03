exports.plus = function() {
  var adder = 0;
  for (var i = 0; i < arguments.length; i++) {
    adder += arguments[i];
  }
  return adder;
}