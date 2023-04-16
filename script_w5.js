function showCity(event) {
  event.preventDefault();
  let input = document.querySelector("#input-city");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${input.value}`;
}

function showWeather(position) {
  let city = document.querySelector("#input-city").value;
  let apiKey = "67f34fda92a7b6b39f2bc14fff777cc1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function show(response) {
    let weather = Math.round(response.data.main.temp);
    let bla = document.querySelector("#special-unit");
    bla.innerHTML = weather;
  }
  axios.get(`${apiUrl}`).then(show);
}
navigator.geolocation.getCurrentPosition(showWeather);

let blabla = document.querySelector("#search-city");
blabla.addEventListener("submit", showCity, showWeather);
