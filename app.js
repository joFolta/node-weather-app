const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Command line arguement (e.g. node app Boston)
const address = process.argv[2];

if (!address) {
  console.log("Please provide address");
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(data.location);
      console.log(forecastData);
    });
  });
}
