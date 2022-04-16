const request = require("request");
require("dotenv").config();

const WEATHER_URL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_ACCESS_KEY}&query=New York&units=f`;
const GEOCODING_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.GEOCODING_API_ACCESS_KEY}`;

request({ url: WEATHER_URL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather services!");
  } else if (response.body.error) {
    console.log("Unable to find location!");
  } else {
    const data = response.body;
    const currentTemperatureData = data.current;

    console.log(
      `${currentTemperatureData.weather_descriptions[0]}. It is currently ${currentTemperatureData.temperature} degrees out. It feels like ${currentTemperatureData.feelslike} degrees out.`
    );
  }
});

// Geocoding: address -> lat/long
request({ url: GEOCODING_URL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services!");
  } else if (!response.body.features.length) {
    console.log("Unable to find location! Try another search.");
  } else {
    const data = response.body;
    const longitude = data.features[0].center[0];
    const latitude = data.features[0].center[1];

    console.log(latitude, longitude);
  }
});
