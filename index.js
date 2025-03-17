const express = require("express");
const app = express();
const path = require("path");

// this both are parser.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup of static file
app.use(express.static(path.join(__dirname, "public")));

// following is EJS setup
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
  res.render("index");
});

// dynamic routing
app.get("/profile/:name", (req, res) => {
  res.send(`Welcome ${req.params.name}`);
});
app.get("/author/:name/:age", (req, res) => {
  //   res.send(req.params);
  res.send(`Welcome ${req.params.name} of age ${req.params.age}`);
});

app.listen(3000, function () {
  console.log("its running");
});
