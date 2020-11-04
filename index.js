var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(1348, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("start");
});

app.get("/user", function (req, res) {
  res.json({
    Data: "Vien",
    date: "22",
  });
});
