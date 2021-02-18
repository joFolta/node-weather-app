console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const place = document.querySelector("#place");
const icon = document.querySelector("#icon");
const description = document.querySelector("#description");
const temp = document.querySelector("#temp");
const wind = document.querySelector("#wind");
const rain = document.querySelector("#rain");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const address = search.value;

  place.textContent = "...Loading...";
  icon.src = "";
  description.textContent = "";
  temp.textContent = "";
  wind.textContent = "";
  rain.textContent = "";

  fetch(`/weather?address=${address}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        place.textContent = data.error;
      } else {
        place.textContent = data.location;
        icon.src = data.icon;
        description.textContent = data.description;
        temp.textContent = data.temp;
        wind.textContent = data.wind;
        rain.textContent = data.rain;
      }
    });
  });
});
