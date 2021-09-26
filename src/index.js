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

const weather = async (term) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=646bad4630202074bd6e0e37126b3203`, {mode: 'cors'});

  const data = await response.json();
  return data
};

function priorElementCheck() {
  let weatherContainer = document.getElementsByClassName("weather-container")[0];
  if (weatherContainer) {
    weatherContainer.remove();
  };
}


const process = (data) => {

  for (let prop in data) {
    if (prop === "main") {
      let tempInfo = data[prop];
      for (let prop in tempInfo) {
        if (prop === "temp") {
          let tempElement = elementBuilder("p", "temp", weatherContainer);
          tempElement.textContent = `${(tempInfo[prop])}`;
        };
      };
    };
    if (prop === "weather") {
      let weatherInfo = data[prop];
      for (let prop in weatherInfo) {
        let newWeather = weatherInfo[prop];
        for (let newProp in newWeather) {
          if (newProp === "main") {
            let weatherElement = elementBuilder("p", "main", weatherContainer);
            weatherElement.textContent = `${(newWeather[newProp])}`;
          };
          if (newProp === "description") {
            let weatherElement = elementBuilder("p", "description", weatherContainer);
            weatherElement.textContent = `${(newWeather[newProp])}`;weatherContainer
          };
        };
      };
    };
  };
}

const searchContainer = elementBuilder("div", "search-container", headContainer);

const searchBar = elementBuilder("input", "search", searchContainer);
searchBar.setAttribute("type", "text");
searchBar.setAttribute("placeholder", "Search...");

const button = elementBuilder("button", "search-button", searchContainer)
button.textContent = "Search";

const searchWeather = () => {
    let term = searchBar.value;
    let data = weather(term);
    priorElementCheck();
    

};

//weatherContainer = elementBuilder("div", "weather-container", body);

button.addEventListener("click", searchWeather);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchWeather();
  };
}, false);

