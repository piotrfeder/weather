import { createDivBox, changeTime } from './tools.js';

let weatherInfoBox = document.querySelector('.weatherInfo');

let showCityName = (city = 'Nie można odczytać miasta') => {
    let divBox = document.createElement('h2');
    divBox.innerHTML = (city);
    weatherInfoBox.appendChild(divBox);
}

let showCurrentData = (data) => {
  
    let currentTime = changeTime(data),
        mainBox = document.createElement('div');
    mainBox.setAttribute('class', 'currentTime mainBox');
    createDivBox('Dane z:', 'time', currentTime, mainBox, false);
    weatherInfoBox.appendChild(mainBox);
}

let showWeatherCond = (cond) => {
    const { description = 'brak', 
            icon = 'brak', 
            id = 'brak', 
            main = 'brak' } = cond[0];

    let iconLink = `http://openweathermap.org/img/w/${icon}.png`;
    let mainBox = document.createElement('div');
    mainBox.setAttribute('class', 'weatherCond mainBox');
    createDivBox('', 'main', main, mainBox);
    createDivBox('', 'description', description, mainBox);
    createDivBox('', 'icon', iconLink, mainBox, true);
    
    weatherInfoBox.appendChild(mainBox);
    
}

let showWind = (wind) => {
    const { deg = 'brak', 
            speed = 'brak'} = wind;

    let mainBox = document.createElement('div');
    mainBox.setAttribute('class', 'windInfo mainBox');
    createDivBox('Szybkosc wiatru:', 'windSpeed', speed + ' km/h', mainBox);
    createDivBox('Kierunek wiatru:', 'windDeg', deg, mainBox);
    weatherInfoBox.appendChild(mainBox);
}

let showMainWeather = (main) => {
    const { humidity = 'brak', 
            pressure = 'brak', 
            temp = 'brak', 
            temp_min  = 'brak', 
            temp_max  = 'brak'} = main;

    let mainBox = document.createElement('div');
    mainBox.setAttribute('class', 'mainWeather mainBox');
    createDivBox('Wilgotność:', 'humidity', humidity + ' %', mainBox);
    createDivBox('Ciśnienie:', 'pressure', pressure + ' hPa', mainBox);
    createDivBox('Temperatura:', 'temp', temp + 'C', mainBox);
    createDivBox('Temperatura max:', 'tempMax', temp_max  + 'C', mainBox);
    createDivBox('Temperatura min:', 'tempMin', temp_min  + 'C', mainBox);
    weatherInfoBox.appendChild(mainBox);
}

let showSun = (sunInfo) => {
    const { sunrise, 
            sunset} = sunInfo;

    let mainBox = document.createElement('div'),
        changedSunrise = changeTime(sunrise),
        changedSunset = changeTime(sunset);
    
    mainBox.setAttribute('class', 'sunInfo mainBox'); 
    createDivBox('Wschód słońca', 'sunrise', changedSunrise, mainBox);
    createDivBox('Zachód słońca', 'sunrise', changedSunset, mainBox);
     weatherInfoBox.appendChild(mainBox);
}

export { showCityName, showCurrentData, showMainWeather, showSun, showWeatherCond, showWind };