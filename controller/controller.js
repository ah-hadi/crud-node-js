const mongoose = require("mongoose");
const { model } = require("../model/schema");
let jwt = require("jsonwebtoken");

function signup(req, res) {
  let email = req.body.email;
  let password = req.body.password;
  let value = new model({
    email: email,
    password: password,
  });
  value.save();
  res.status(200).send(value);
}
async function login(req, res) {
  let email = req.body.email;
  let password = req.body.password;
  let user = await model.findOne({ email });
  console.log("====", user);
  if (!user) {
    return res.status(404).json({
      message: "not-found",
    });
  }
  if (user.email == email) {
    const token = jwt.sign(email, "my super secret key");
    res.send(token);
  } else {
    return res.status(404).json({
      message: "not-found",
    });
  }
}
function userlogin(req, res) {
  res.send("user logged in");
}

function update(req, res) {
  const _id = req.params.id;
  let email = req.body.email;
  let password = req.body.password;
  let updateObj = {
    email: email,
    password: password,
  };
  // console.log(_id);
  model.findByIdAndUpdate(_id, updateObj, function (err, model) {
    if (err) {
      return res.status(401).send("error");
    } else {
      return res.status(200).send("successfully updated");
    }
  });
}

function del(req, res) {
  const _id = req.params.id;
  console.log(req.params.id);
  model.findByIdAndDelete(_id, function (err, model) {
    if (err) {
      return res.status(401).send("error");
    } else {
      return res.status(200).send("successfully updated");
    }
  });
}
module.exports = { signup, login, userlogin, update, del };
