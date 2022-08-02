var express = require("express");
var app = express();
var port = 5000;
const route = require("../router/router");
const bodyParser = require("body-parser");
// const database = require("./database/database");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/auth", {
  useUnifiedTopology: true,
  useNewurlParser: true,
});

app.use(bodyParser.json());
app.use("/", route);
app.listen(port || 5000, function () {
  var datetime = new Date();
  var message = "Server running on port:-" + port + "Started at:-" + datetime;
  console.log(message);
});
