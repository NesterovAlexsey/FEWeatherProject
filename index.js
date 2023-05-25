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
const weather = document.getElementById("wheatherCode");

async function getWeather() {
    const responseObj = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const data = await responseObj.json();
    const { latitude, longitude, city } = data;
    cityName.textContent = city;

    const getWeather = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
    const weatherObj = await getWeather.json();
    const { current_weather } = weatherObj;
    const { temperature, windspeed, weathercode } = current_weather;

    temp.textContent = temperature;
    wind.textContent = windspeed;

    let weatherResult;
    switch (weathercode) {
        case 0: weatherResult = "Clear sky";
            break;
        case 1: weatherResult = "Mainly clear";
            break;
        case 2: weatherResult = "partly cloudy";
            break;
        case 3: weatherResult = "and overcast";
            break;
        case 45: weatherResult = "Fog and depositing rime fog";
            break;
        case 48: weatherResult = "Fog and depositing rime fog";
            break;
        case 51: weatherResult = "Drizzle: Light, moderate, and dense intensity";
            break;
        case 53: weatherResult = "Drizzle: Light, moderate, and dense intensity";
            break;
        case 55: weatherResult = "Drizzle: Light, moderate, and dense intensity";
            break;
        case 56: weatherResult = "Freezing Drizzle: Light and dense intensity";
            break;
        case 57: weatherResult = "Freezing Drizzle: Light and dense intensity";
            break;
        case 61: weatherResult = "Rain: Slight, moderate and heavy intensity";
            break;
        case 63: weatherResult = "Rain: Slight, moderate and heavy intensity";
            break;
        case 65: weatherResult = "Rain: Slight, moderate and heavy intensity";
            break;
        case 66: weatherResult = "Freezing Rain: Light and heavy intensity";
            break;
        case 67: weatherResult = "Freezing Rain: Light and heavy intensity";
            break;
        case 71: weatherResult = "Snow fall: Slight, moderate, and heavy intensity";
            break;
        case 73: weatherResult = "Snow fall: Slight, moderate, and heavy intensity";
            break;
        case 75: weatherResult = "Snow fall: Slight, moderate, and heavy intensity";
            break;
        case 77: weatherResult = "Snow grains";
            break;
        case 80: weatherResult = "Rain showers: Slight, moderate, and violent";
            break;
        case 81: weatherResult = "Rain showers: Slight, moderate, and violent";
            break;
        case 82: weatherResult = "Rain showers: Slight, moderate, and violent";
            break;
        case 85: weatherResult = "Snow showers slight and heavy";
            break;
        case 86: weatherResult = "Snow showers slight and heavy";
            break;
        case 95: weatherResult = "Thunderstorm: Slight or moderate";
            break;
        case 96: weatherResult = "Thunderstorm with slight and heavy hail";
            break;
        case 99: weatherResult = "Thunderstorm with slight and heavy hail";
            break;
        default:
            weatherResult = "Sunny-Sunny";
    }

    weather.textContent = weatherResult;

}

getWeather();