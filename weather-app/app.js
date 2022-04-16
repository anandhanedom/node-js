const request = require("request");
require("dotenv").config();

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address!");
} else {
  geocode(address, (error, geocodedData) => {
    if (error) {
      return error;
    }

    const { latitude, longitude, location } = geocodedData;
    console.log(geocodedData);

    forecast(longitude, latitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}
