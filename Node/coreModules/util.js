var util = require("util");
var text = "Congratulations! %s for his %dth anniversery in %s";
var result = util.format(text, "Linus", 6, "India");
console.log(result);