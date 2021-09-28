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

function priorElementCheck(className) {
  let container = document.getElementsByClassName(className)[0];

  if (container) {
    container.remove();
  };
};

const process = (data) => {
  let forecastObj = new Object();

  const getCity = (() => {
    for (let prop in data) {
      if (prop === "city") {
        let cityObj = data[prop];
        for (let prop in cityObj) {
          if (prop === "name") {
            forecastObj.name = cityObj[prop];
          };
        };
      };
    };
  })();

  const dayObj = (todayObj) => {
    let weatherObj = new Object();

    function infoProcessor(info) {
      let newInfo = info.charAt(0).toLowerCase() + info.slice(1);
      if (newInfo === "clouds") {
        newInfo = "cloudy"
      };
      return newInfo
    };

    const getDate = (() => {
      for (let prop in todayObj) {
        if (prop === "dt") {
          let dt = todayObj[prop];
          let dayname = new Date(dt * 1000).toLocaleDateString(`en`, { weekday: `long`, });
          weatherObj.date = dayname;
        };
      };
    })();
  
    const getTemp = (() => {
      for (let prop in todayObj) {
        if (prop === "main") {
          let main = todayObj[prop];
          for (let prop in main) {
            console.log(prop)
            console.log(main[prop])
            if (prop === "temp") {
              let temp = main[prop];
              weatherObj.temp = Math.round(temp);
            };
            if (prop === "temp_max") {
              let temp = main[prop];
              weatherObj.high = Math.round(temp);
            };
            if (prop === "temp_min") {
              let temp = main[prop];
              weatherObj.low = Math.round(temp);
            };
          };
        };
      };
    })();

    const getWeather = (() => {
      for (let prop in todayObj) {
        if (prop === "weather") {
          let weatherInfo = todayObj[prop];
          for (let prop in weatherInfo) {
            let newWeather = weatherInfo[prop];
            for (let newProp in newWeather) {
              if (newProp === "main") {
                let info = newWeather[newProp];
                let newInfo = infoProcessor(info);
                weatherObj.info = newInfo;
              };
            };
          };
        };
      };
    })();

    let date = weatherObj.date;
    let temp = weatherObj.temp;
    let high = weatherObj.high;
    let low = weatherObj.low;
    let info = weatherObj.info;

    return { date, temp, high, low, info }
  };

  const newForecast = () => {
    let forecastArray = [];
    for (let prop in data) {
      if (prop === "list") {
        let forecastList = data[prop];
        for (let i = 0; i < forecastList.length; i++) {
          if ((i % 8) === 0) {
            let newDay = dayObj(forecastList[i]);
            forecastArray.push(newDay);
          };
        };
      };
    };
    return forecastArray
  };

  let city = forecastObj.name;
  let forecastArray = newForecast();
  
  return { city, forecastArray }  
};

const todaysWeather = (weatherData) => {
  priorElementCheck("weather-container");
  let today = weatherData.forecastArray[0];

  let weatherContainer = elementBuilder("div", "weather-container", body);

  let infoContainer = elementBuilder("div", "info-container", weatherContainer);

  let cityName = elementBuilder("h2", "city", infoContainer);
  cityName.textContent = `${weatherData.city}`;
  
  let date = elementBuilder("p", "todays-date", infoContainer);
  date.textContent = today.date;

  let tempElement = elementBuilder("p", "temp", infoContainer);
  tempElement.textContent = `${today.temp}°`;

  let forecast = elementBuilder("p", "forecast", infoContainer);
  forecast.textContent = `The forecast for today is ${today.info} with a high of ${today.high}° and a low of ${today.low}°.`

  let imgContainer = elementBuilder("div", "img-container", weatherContainer);
  let weatherImg = elementBuilder("img", "weather-img", imgContainer);
  weatherImg.src = `http://via.placeholder.com/100x100`;
};

const fiveDayElements = (weatherData) => {
  priorElementCheck("forecast-container");
  let forecastContainer = elementBuilder("div", "forecast-container", body);

  for (let i = 1; i < weatherData.forecastArray.length; i++) {
    let day = weatherData.forecastArray[i];
    let infoContainer = elementBuilder("div", "forecast-info", forecastContainer);

    let dateElement = elementBuilder("p", "forecast-date", infoContainer);
    dateElement.textContent = `${day.date}`;

    let tempElement = elementBuilder("p", "forecast-temp", infoContainer);
    tempElement.textContent = `${day.temp}°`;

    let highLowElement = elementBuilder("p", "forecast-temp", infoContainer);
    highLowElement.textContent = `High: ${day.high}° / Low: ${day.low}°`;

  };
};

const errCheck = (error) => {
  priorElementCheck("error");
  let errContainer = elementBuilder("div", "weather-container", body);

  let errElement = elementBuilder("p", "error", errContainer);
  errElement.textContent = `Error: ${error}`;
};

const zipCheck = (term) => {
  let zip = parseInt(term);
  if (Number.isInteger(zip)) {
    let forecast = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us`;
    return forecast;
  } else {
    let forecast =  `https://api.openweathermap.org/data/2.5/forecast?q=${term}`;
    return forecast;
  };
};

const weather = async (term) => {
  let checkedTerm = zipCheck(term);
  let unit = `&units=imperial`;
  try {
    const response = await fetch(`${checkedTerm + unit}&appid=646bad4630202074bd6e0e37126b3203`, {mode: 'cors'});
    const data = await response.json();
    let newWeather = process(data);
    if (newWeather.city !== undefined) {
      todaysWeather(newWeather);
      fiveDayElements(newWeather);
    } else { errCheck(`That search term was not identified. Please enter a city name or zip code.`); };
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

