const path = require("path");

const express = require("express");

const publicDirPath = path.join(__dirname, "../public");

const app = express();

app.use(express.static(publicDirPath));

app.get("/weather", (req, res) => {
  res.send({ forecast: "Partly cloudy", location: "Wayanad" });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
