const path = require("path");

const express = require("express");

const homePagePath = path.join(__dirname, "../public");
const helpPagePath = path.join(__dirname, "../public/help.html");
const aboutPagePath = path.join(__dirname, "../public/about.html");

const app = express();

app.use(express.static(homePagePath));
app.use("/about", express.static(aboutPagePath));
app.use("/help", express.static(helpPagePath));

app.get("/weather", (req, res) => {
  res.send({ forecast: "Partly cloudy", location: "Wayanad" });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
