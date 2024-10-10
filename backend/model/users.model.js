const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  email: String,
  pass: String,
  isVarified: Boolean,
});


module.exports = mongoose.model("user", usersSchema)
