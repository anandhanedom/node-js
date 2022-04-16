const request = require("request");
require("dotenv").config();

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Boston", (error, geocodedData) => {
  if (error) {
    return error;
  }

  const { latitude, longitude, location } = geocodedData;
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }

    console.log(location);
    console.log(forecastData);
  });
});
