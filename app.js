const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/about", function (req, res) {
  res.send("About page here");
});

app.get("*", function (req, res) {
  res.redirect("/");
});

app.listen(3000);
