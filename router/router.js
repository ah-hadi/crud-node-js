//const { Router } = require("express");
var express = require("express");
var controller = require("../controller/controller");
const { decode } = require("../middleware/middleware");

var route = express.Router();
route.post("/signup", controller.signup);
route.post("/login", controller.login);
route.put("/update/:id", controller.update);
route.delete("/delete/:id", controller.del);
route.get("/user", decode, controller.userlogin);

module.exports = route;
