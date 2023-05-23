let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");

const weather = {};

weather.temperature ={
  unit:Celsius,
}
const kelvin = 273;

const key = "37abec9ca078f6d3a7653fc6f894f5c2";

if('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(setposition, showerror);
   
}else{
  
}
