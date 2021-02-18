const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=79e93368ece76c99d0d3b786b317e05a&query=Boston";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
