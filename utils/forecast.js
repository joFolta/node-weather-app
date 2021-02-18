const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=79e93368ece76c99d0d3b786b317e05a&query=${latitude},${longitude}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (response.body.error) {
      callback(
        "Unable to find location in weather service. Try another search.",
        undefined
      );
    } else {
      callback(undefined, {
        description: response.body.current.weather_descriptions[0],
        icon: response.body.current.weather_icons[0],
        temp: response.body.current.temperature,
        wind: response.body.current.wind_speed,
        rain: response.body.current.precip,
      });
    }
  });
};

module.exports = forecast;
