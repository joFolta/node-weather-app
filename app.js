const request = require("request");

// Weather
const url =
  "http://api.weatherstack.com/current?access_key=79e93368ece76c99d0d3b786b317e05a&query=Boston&units=f";

request({ url: url, json: true }, (error, response) => {
  console.log(
    `It is currently ${response.body.current.temperature} F. It feels like ${response.body.current.feelslike} F. `
  );
});

// Geocoding
const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/boston.json?access_token=pk.eyJ1IjoiY29tcGxleGFwaWNlbnN1c2FuZG1hcCIsImEiOiJjanh6ZnBlYWEwMmptM2RvYW02ZTIwODk0In0.m4zyrwu_-34qVZNFVbKtCQ&limit=1";
request({ url: geocodeUrl, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
