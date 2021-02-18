const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=79e93368ece76c99d0d3b786b317e05a&query=${latitude},${longitude}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (response.body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(
        undefined,
        `In ${response.body.location.name}, ${response.body.location.region} it is currently ${response.body.current.temperature} F. It feels like ${response.body.current.feelslike} F. `
      );
    }
  });
};

module.exports = forecast;
