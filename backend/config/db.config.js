const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.DB_URL;

mongoose
  .connect(URL)
  .then(() => console.log(`Mongo DB Atlas is connected at ${URL}`))
  .catch((error) => console.log(error));
