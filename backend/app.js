const express = require("express"); // init express js
const body_parser = require("body-parser"); // init body parser
const cors = require("cors"); // init cors
const app = express(); // create new app

/**
 * use all middlewares
 */

app.use(cors());
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json({ limit: "100mb" })); // Increase limit if needed

/**
 * import all routes here
 */

// all routes will be import here................

/**
 * connect all routes
 */

// connect all routes here...................

// home route
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Hello World",
    title: "Welcome to Republic of Legends Server",
  });
});

// error route
app.use((req, res, next) => {
  res.status(404).json({ msg: "Route not found" });
});

module.exports = app;
