const input = document.querySelector("input");
const temperatureContainer = document.querySelector(".temperature-container");
const cityName = document.querySelector(".city-name");
const cityCountry = document.querySelector(".city-country");
const timeDisplay = document.querySelector(".time-display");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".current-description");
const wind = document.querySelector(".detail-wind");
const visibility = document.querySelector(".detail-visibility");
const pressure = document.querySelector(".detail-pressure");
const humidity = document.querySelector(".detail-humidity");

input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    if (!input.value) {
      return;
    }
    const data = await fetchWeather(input.value);

    appendWeather(data);
  }
});

const fetchWeather = async function (location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4e7484a149d26d11ab8954743cd85fc5`
  );
  const data = await response.json();
  return data;
};

const appendWeather = function (data) {
  cityName.textContent = data.name;
  cityCountry.textContent = data.sys.country;

  const newDate = new Date();
  timeDisplay.textContent = newDate.toTimeString().slice(0, 5);

  temperature.textContent = (data.main.temp - 273.15).toFixed();
  description.textContent = data.weather[0].main;

  wind.textContent = `${data.wind.speed}m/s`
  visibility.textContent = `${(data.visibility / 1000).toFixed(1)}km`;
  pressure.textContent = `${data.main.pressure}hPa`;
  humidity.textContent = `${data.main.humidity}%`
};
