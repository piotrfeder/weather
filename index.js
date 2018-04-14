import { removeChilds} from './js_modules/tools.js';
import {showCityName, showCurrentData, showMainWeather, showSun, showWeatherCond, showWind} from './js_modules/shows.js';

let btn = document.querySelector('.action-btn'),
    cityInput = document.querySelector('#city'),
    cityWarning = document.querySelector('.warning'),
    weatherInfoBox = document.querySelector('.weatherInfo'),
    cityInputValue;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    cityInputValue = cityInput.value;

    if (cityInputValue === '') {
        cityWarning.style.display = 'block';
    } else {
        cityWarning.style.display = 'none';

        if(self.fetch)
        {
            getWeatherByCity(cityInputValue);
        }
        else {
            weatherInfoBox.innerHTML = "<p class='fetch-info'>Ta przeglądarka nie obsługuje fetch(). Wybierz Chrome lub FF.</p>";
        }
       
    }

})


let showWeather = (data) => {
    removeChilds(weatherInfoBox);
    let weatherData = data;
    showCityName(weatherData.name);
    showSun(weatherData.sys);
    showWeatherCond(weatherData.weather);
    showCurrentData(weatherData.dt);
    showMainWeather(weatherData.main);
    showWind(weatherData.wind);
}



let getWeatherByCity = (cityName) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=f6eec388d2777d8e7ad84b20ad2e5bb4`
    return fetch(url, {
            method: 'GET'
        })
        .then(response => {
            if (response.status != 200) {}
            response.json().then((data) => {
                
                showWeather(data);
            })
        }).catch(error => console.log('Error', error))
}



