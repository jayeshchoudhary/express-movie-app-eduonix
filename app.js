const express = require("express");
const app = express();
const axios = require("axios").default;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("dotenv").config();

const PORT = 8001;

const BASE_API_URL = "https://www.omdbapi.com";

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/search");
});

app.post("/search", async (req, res) => {
  const { movieName } = req.body;
  const response = await axios.get(
    `${BASE_API_URL}/?apikey=${process.env.API_KEY}&s=${movieName}`
  );

  const { Search } = response.data;
  res.render("pages/search", { movies: Search });
});

app.get("*", function (req, res) {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`App is running or port ${PORT}`);
});
