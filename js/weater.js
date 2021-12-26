const API_KEY = "a7c03f944ef68eb6fd4d5d74f4f10ece"
function onGeoOK(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    const city = document.querySelector(".weather span:nth-child(2)")
    const weather = document.querySelector(".weather span:last-child");
    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);

