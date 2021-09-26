import _ from 'lodash';
import './style.css';

function elementBuilder (elType, className, parent) {
  const newElement = document.createElement(elType);
  newElement.classList.add(className);
  parent.appendChild(newElement);
  return newElement;
};

const body = document.querySelector("body");

const headContainer = elementBuilder("div", "head-container", body);

const head = elementBuilder("h1", "head", headContainer);
head.textContent = "WeatherApp";

function priorElementCheck() {
  let weatherContainer = document.getElementsByClassName("weather-container")[0];
  if (weatherContainer) {
    weatherContainer.remove();
  };
};

const process = (data) => {
  let weatherObj = new Object();

  const getTemp = (() => {
    for (let prop in data) {
      let tempInfo = data[prop];
      for (let prop in tempInfo) {
        if (prop === "temp") {
          let temp = tempInfo[prop];
          weatherObj.temp = temp;
        };
      };
    }
  })();

  const getWeather = (() => {
    for (let prop in data) {
      if (prop === "weather") {
        let weatherInfo = data[prop];
        for (let prop in weatherInfo) {
          let newWeather = weatherInfo[prop];
          for (let newProp in newWeather) {
            if (newProp === "main") {
              let info = newWeather[newProp];
              weatherObj.info = info;
            };
          };
        };
      };
    };
  })();

  const getDesc = (() => {
    for (let prop in data) {
      if (prop === "weather") {
        let weatherInfo = data[prop];
        for (let prop in weatherInfo) {
          let newWeather = weatherInfo[prop];
          for (let newProp in newWeather) {
            if (newProp === "description") {
              let desc = newWeather[newProp];
              weatherObj.desc = desc;
            };
          };
        };
      };
    };
  })();

  let temp = weatherObj.temp;
  let info = weatherObj.info;
  let desc = weatherObj.desc;

  return { temp, info, desc  }
};

const weatherElements = (weatherData) => {
  priorElementCheck();
  let weatherContainer = elementBuilder("div", "weather-container", body);

  let tempElement = elementBuilder("p", "temp", weatherContainer);
  tempElement.textContent = `Temperature: ${weatherData.temp}`;

  let weatherInfo = elementBuilder("p", "main", weatherContainer);
  weatherInfo.textContent = `Info: ${weatherData.info}`;

  let weatherDesc = elementBuilder("p", "description", weatherContainer);
  weatherDesc.textContent = `Description: ${weatherData.desc}`;
};

const weather = async (term) => {
  let unit = `&units=imperial`;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${term + unit}&appid=646bad4630202074bd6e0e37126b3203`, {mode: 'cors'});

  const data = await response.json();
  let newWeather = process(data);
  weatherElements(newWeather);
};

function searchWeather() {
  let term = searchBar.value;
  weather(term);
};

const searchContainer = elementBuilder("div", "search-container", headContainer);

const searchBar = elementBuilder("input", "search", searchContainer);
searchBar.setAttribute("type", "text");
searchBar.setAttribute("placeholder", "Search...");

const button = elementBuilder("button", "search-button", searchContainer)
button.textContent = "Search";

button.addEventListener("click", searchWeather);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchWeather();
  };
}, false);