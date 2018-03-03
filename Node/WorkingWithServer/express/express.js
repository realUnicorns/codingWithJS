const express = require('express');
var bodyParser = require('body-parser');
const app = express();
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
app.set("view engine", "ejs");
app.use("/sketch", express.static("public"));
app.listen(3000);
app.get("/", (req, res) => {
  res.render("index"); //res.send(); can be used to send local values
});
app.post("/contact", urlencodedParser, (req, res) => {
  if (!req.body.name) {
    res.send("Error! Fill in the boxes properly");
  }
  res.render("contact-sucess", {
    name: req.body.name
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    qs: req.query
  });
});
app.get("/language/:lang", (req, res) => {
  res.render("languages", {
    lang: req.params.lang
  });
});