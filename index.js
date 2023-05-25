// API для определения координат:
// https://www.geojs.io/docs/v1/endpoints/ip/

// API для прогногза погоды:
// https://open-meteo.com/

// 1. показывал температуру и расшифрованный код

// 2. были стили шрифты картинки 
// 3. деплой на gitPages
// 4. Readme c описанием проекта и ссылкой на pages
const cityName = document.getElementById("city");
const temp = document.getElementById("temperature");
const wind = document.getElementById("windSpead"); 

async function getWeather(){
    const responseObj = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const data = await responseObj.json();
    const {latitude, longitude, city} = data;
    cityName.textContent = city;
    
    const getWeather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
    const weatherObj = await getWeather.json();
    console.log(weatherObj);
    const {current_weather} = weatherObj;
    const {temperature, windspeed, weathercode} = current_weather;
    
    console.log(windspeed, weathercode);
    
    temp.textContent = temperature;
    wind.textContent = windspeed;
}

getWeather();