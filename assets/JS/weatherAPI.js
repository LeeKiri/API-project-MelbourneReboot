
//Daily Weather Forecast

//Accuweather API Key and Location key for Melbourne City
var apikey = "526092ea9b2c65dd4c4d6ee0811a5950";

// var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + Melbourne,au; + "&appid=" + APIkey;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + 37.8136 + "&lon=" + 144.9631 + "&units=metric" + "&appid=" + apikey;

//DOM for storing weather data
var todaysForecast = {};
var displayWeather = document.getElementById("todaysForecast");

//fetching Accuweather Daily Weather Data
async function fetchWeather () {

    var resp = await fetch(queryURL)
    if (!resp.ok) {
        throw Error("ERROR");
    }
    resp = await resp.json()
    console.log(resp);

    var currentDate = moment().format('LLLL').slice(0, -8);
    var minTemp = "Min " + resp.main.temp_min + " °C";
    var maxTemp = "Max " + resp.main.temp_max + " °C";

    displayWeather.textContent = currentDate + " : " + minTemp + "  " + maxTemp;

};

var queryIconUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + 37.8136 + "&lon=" + 144.9631 + "&appid=" + apikey

async function fetchIcon(){

    var iconResp = await fetch(queryIconUrl)
    if (!iconResp.ok) {
        throw Error("ERROR");
    }
    iconResp = await iconResp.json();
    var iconCode = iconResp.list[3].weather[0].icon;
    var weatherIcon = document.createElement("img");
    weatherIcon.src = "https://openweathermap.org/img/w/" + iconCode + ".png";
    displayWeather.appendChild(weatherIcon);
}
    
fetchWeather();
fetchIcon();










