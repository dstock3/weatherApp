import _ from 'lodash';
import './style.css';
import 'reset-css';

const head = document.getElementsByTagName("head")[0];
const meta = elementBuilder("meta", "meta-tag", head);
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1");

function elementBuilder (elType, className, parent) {
  const newElement = document.createElement(elType);
  newElement.classList.add(className);
  parent.appendChild(newElement);
  return newElement;
};

const body = document.querySelector("body");

function priorElementCheck() {
  let weatherContainer = document.getElementsByClassName("weather-container")[0];
  if (weatherContainer) {
    weatherContainer.remove();
  };
};

const process = (data) => {
  let weatherObj = new Object();

  const getCity = (() => {
    for (let prop in data) {
      if (prop === "name") {
        console.log(data[prop])
        weatherObj.name = data[prop];
      };
    };
  })();

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

  let infoContainer = elementBuilder("div", "info-container", weatherContainer);

  let tempElement = elementBuilder("p", "temp", infoContainer);
  tempElement.textContent = `Temperature: ${weatherData.temp}`;

  let weatherInfo = elementBuilder("p", "main", infoContainer);
  weatherInfo.textContent = `Info: ${weatherData.info}`;

  let weatherDesc = elementBuilder("p", "description", infoContainer);
  weatherDesc.textContent = `Description: ${weatherData.desc}`;

  let imgContainer = elementBuilder("div", "img-container", weatherContainer);
  let weatherImg = elementBuilder("img", "weather-img", imgContainer);
  weatherImg.src = `http://via.placeholder.com/100x100`
};

const errCheck = (error) => {
  priorElementCheck();
  let errContainer = elementBuilder("div", "weather-container", body);

  let errElement = elementBuilder("p", "error", errContainer);
  errElement.textContent = `Error: ${error}`;
};

function zipCheck(term) {
  let zip = parseInt(term);
  if (Number.isInteger(zip)) {
    let zipTerm = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us`;
    return zipTerm
  } else {
    return `https://api.openweathermap.org/data/2.5/weather?q=${term}` 
  };
};

const weather = async (term) => {
  let checkedTerm = zipCheck(term);
  let unit = `&units=imperial`;
  try {
    const response = await fetch(`${checkedTerm + unit}&appid=646bad4630202074bd6e0e37126b3203`, {mode: 'cors'});

    const data = await response.json();
    console.log(data);
    let newWeather = process(data);
    if (newWeather.temp !== undefined) {
      weatherElements(newWeather);
    } else { errCheck(`That search term was not identified. Please enter a city name.`); }
  } catch (error) {
    errCheck(error);
  };
};

const searchElements = (() => {
  const headContainer = elementBuilder("div", "head-container", body);

  const header = elementBuilder("h1", "head", headContainer);
  header.textContent = "WeatherApp";

  const searchContainer = elementBuilder("div", "search-container", headContainer);

  const searchBar = elementBuilder("input", "search", searchContainer);
  searchBar.setAttribute("type", "text");
  searchBar.setAttribute("placeholder", "Search City or Zip Code...");

  const button = elementBuilder("button", "search-button", searchContainer)
  button.textContent = "Search";

  button.addEventListener("click", searchWeather);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      searchWeather();
    };
  }, false);

  function searchWeather() {
    let term = searchBar.value;
    weather(term);
  };
})();

