const request = require("request");

const geocode = (address, callback) => {
  const GEOCODING_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${process.env.GEOCODING_API_ACCESS_KEY}`;

  // Geocoding: address -> lat/long
  request({ url: GEOCODING_URL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location service!", undefined);
    } else if (!response.body.features.length) {
      callback("Unable to find location! Try another search.", undefined);
    } else {
      const data = response.body;
      const geocodedData = {
        longitude: data.features[0].center[0],
        latitude: data.features[0].center[1],
        location: data.features[0].place_name,
      };

      callback(undefined, geocodedData);
    }
  });
};

module.exports = geocode;
