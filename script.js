const input = document.querySelector("input");
const temperatureContainer = document.querySelector(".temperature-container");

input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    if (!input.value) {
      return;
    }
    const data = await fetchWeather(input.value);
    console.log(data);
  }
});

const fetchWeather = async function (location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4e7484a149d26d11ab8954743cd85fc5`
  );
  const data = await response.json();
  return data;
};
