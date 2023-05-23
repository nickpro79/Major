const iconelement = document.querySelector(".weather-icon")
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationELement= document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const weather={};

weather.temperature={
    unit:"Celsius",
}

const kelvin = 273;

const key = "37abec9ca078f6d3a7653fc6f894f5c2";
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition,showerror);
  } else {
    notificationElement .innerHTML = "Geolocation is not supported by this browser.";
  }

function setposition(position) {
  let lat=position.coords.latitude;
  let lon=position.coords.longitude;
  getweather(lat, lon);

}

function showerror(error)
{
  notificationElement.style.display = "block";
  notificationElement.innerHTML =<p> ${error.message}</p> 
}

function getweather(lat, lon){
  let base =`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +`lon=${lon}&appid=${key}`;

  fetch(base)
    .then(function(response){
      let.data = response.json();
      return data;
    })
     
     .then(function(data){
     weather.temperature.value = Math.floor(data.main.temp - kelvin);
     weather.description.value = data.weather[0].description;
     weather.IconID = data.weather[0].icon;
     weather.city = data.name;
     weather.country = data.sys.country;
    })
    .then(function(){
      displayWeather()
    })
  }
