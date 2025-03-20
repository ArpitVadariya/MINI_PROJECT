const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3000;

require("dotenv").config();

// Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files setup
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Home Route - Display all tasks
app.get("/", function (req, res) {
  fs.readdir("./files", function (err, files) {
    if (err) {
      console.error("Error reading files directory:", err);
      return res.render("index", { files: [] }); // Ensure files is always an array
    }
    res.render("index", { files });
  });
});

// Create Task
app.post("/create", function (req, res) {
  const filename = req.body.title.split(" ").join("") + ".txt";
  fs.writeFile(`./files/${filename}`, req.body.details, function (err) {
    if (err) {
      console.error("Error creating file:", err);
    }
    res.redirect("/");
  });
});

// Edit Task Name
app.post("/edit", function (req, res) {
  fs.rename(
    `./files/${req.body.previous}`,
    `./files/${req.body.new}`,
    function (err) {
      if (err) {
        console.error("Error renaming file:", err);
      }
      res.redirect("/");
    }
  );
});

// View Task Details
app.get("/file/:filename", function (req, res) {
  fs.readFile(
    `./files/${req.params.filename}`,
    "utf-8",
    function (err, filedata) {
      if (err) {
        console.error("Error reading file:", err);
        return res.redirect("/"); // Redirect if the file doesn't exist
      }
      res.render("show", { filename: req.params.filename, filedata });
    }
  );
});

// Edit Page Route
app.get("/edit/:filename", function (req, res) {
  res.render("edit", { filename: req.params.filename });
});

// Delete Task
app.get("/delete/:filename", function (req, res) {
  fs.unlink(`./files/${req.params.filename}`, function (err) {
    if (err) {
      console.error("Error deleting file:", err);
    }
    res.redirect("/");
  });
});

// Start Server
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
