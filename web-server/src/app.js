const path = require("path");

const express = require("express");

const publicDirPath = path.join(__dirname, "../public");

const app = express();

app.set("view engine", "hbs");
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
    title: "How can I help you?",
    name: "John Doe",
  });
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "Partly cloudy", location: "Wayanad" });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
