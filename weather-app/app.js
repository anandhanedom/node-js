const request = require("request");
require("dotenv").config();

const URL = `http://api.weatherstack.com/current?access_key=${process.env.API_ACCESS_KEY}&query=New York`;

request({ url: URL }, (error, response) => {
  
});
