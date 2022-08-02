const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const data = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});
let model = mongoose.model("datas", data);

module.exports = { model };
