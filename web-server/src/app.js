const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Paths for express config
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

// Home page
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "John Doe",
  });
});

//About page
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "John Doe",
  });
});

//Help page
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "John Doe",
  });
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "Partly cloudy", location: "Wayanad" });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "John Doe",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "John Doe",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
