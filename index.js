// API для определения координат:
// https://www.geojs.io/docs/v1/endpoints/ip/

// API для прогногза погоды:
// https://open-meteo.com/

// 1. показывал температуру и расшифрованный код

// 2. были стили шрифты картинки 
// 3. деплой на gitPages
// 4. Readme c описанием проекта и ссылкой на pages
const cityName = document.getElementById("city");

async function getIp(){
    const responseObj = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const data = await responseObj.json();
    const {latitude, longitude, city} = data;
    cityName.textContent = city;
}

getIp();