const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const WEATHER_URL = `http://api.weatherstack.com/current?access_key=${
    process.env.WEATHER_API_ACCESS_KEY
  }&query=${(latitude, longitude)}&units=f`;

  request({ url: WEATHER_URL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location!", undefined);
    } else {
      const data = response.body;
      const currentTemperatureData = data.current;

      callback(
        undefined,
        `${currentTemperatureData.weather_descriptions[0]}. It is currently ${currentTemperatureData.temperature} degrees out. It feels like ${currentTemperatureData.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
