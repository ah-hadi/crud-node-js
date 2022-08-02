const { response } = require("express");
var jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
const { model } = require("../model/schema");

function decode(req, res, next) {
  var token = req.headers.authorization.split(" ")[1];
  var email = jwt.verify(token, "my super secret key");
  let dbuser = model.findOne({ email });
  next();
  console.log(dbuser);
  if (email == dbuser.email) {
    console.log(email);
    next();
  } else {
    res.status(401).send({ result: "please add valid token" });
  }
}

module.exports = {
  decode,
};
