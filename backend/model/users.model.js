const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: String,
  email: String,
  pass: String,
  isVarified: Boolean,
});

module.exports = mongoose.model("user", usersSchema);
