const request = require("request");
require("dotenv").config();

const URL = `http://api.weatherstack.com/current?access_key=${process.env.API_ACCESS_KEY}&query=New York`;

request({ url: URL, json: true }, (error, response) => {
  const data = response.body;
  const currentTemperatureData = data.current;

  console.log(
    `It is currently ${currentTemperatureData.temperature} degrees out. It feels like ${currentTemperatureData.feelslike} degrees out.`
  );
});
