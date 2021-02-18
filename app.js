const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=79e93368ece76c99d0d3b786b317e05a&query=Boston&units=f";

request({ url: url, json: true }, (error, response) => {
  console.log(
    `It is currently ${response.body.current.temperature} F. It feels like ${response.body.current.feelslike} F. `
  );
});
