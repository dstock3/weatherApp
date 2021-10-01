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

const getCity = (data) => {
  for (let prop in data) {
    if (prop === "city") {
      let cityObj = data[prop];
      for (let prop in cityObj) {
        if (prop === "name") {
          let city = cityObj[prop];
          return city
        };
      };
    };
  };
};

const images = (() => {
  const clear = `/src/assets/clear.png`;  
  const cloudy = `/src/assets/cloudy.png`;
  const rain = `/src/assets/rain.png`;
  const search = `/src/assets/search.png`;
  return { clear, cloudy, rain, search }
})();

const imageGen = (weatherData) => {
  if (weatherData === "clear") {
    return images.clear
  } else if (weatherData === "cloudy") {
      return  images.cloudy
  } else if (weatherData === "rain") {
    return images.rain
  }
};

const process = (data) => {
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
        if (prop === "temp") {
          let temps = todayObj[prop];
          for (let prop in temps) {
            if (prop === "day") {
              let temp = temps[prop];
              weatherObj.temp = Math.round(temp);
            };
            if (prop === "max") {
              let temp = temps[prop];
              weatherObj.high = Math.round(temp);
            };
            if (prop === "min") {
              let temp = temps[prop];
              weatherObj.low = Math.round(temp);
            };
          };
        };
      };
    })();

    const getWeather = (() => {
      for (let prop in todayObj) {
        if (prop === "weather") {
          let weatherInfo = todayObj[prop][0];
          for (let prop in weatherInfo) {
            if (prop === "main") {
              let info = weatherInfo[prop];
              let newInfo = infoProcessor(info);
              weatherObj.info = newInfo;

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

  const alerts = () => {
    for (let prop in data) {
      if (prop === "alerts") {
        let alertArray = data[prop];
        let newAlertArray = [];
        for (let i = 0; i < alertArray.length; i++) {
          let newAlert = new Object();
          newAlert.event = alertArray[i].event;
          newAlert.desc = alertArray[i].description;
          newAlertArray.push(newAlert);
        };
        return newAlertArray
      };
    };
  };

  const newForecast = () => {
    let forecastArray = [];
    for (let prop in data) {
      if (prop === "daily") {
        let forecastList = data[prop];
        for (let i = 0; i < forecastList.length; i++) {
          let newDay = dayObj(forecastList[i]);
          forecastArray.push(newDay);
        };
      };
    };
    return forecastArray
  };

  let forecastArray = newForecast();
  let alertArray = alerts();

  return { forecastArray, alertArray }
};

const todaysWeather = (weatherData) => {
  priorElementCheck("weather-container");
  let today = weatherData.forecastArray[0];

  let weatherContainer = elementBuilder("div", "weather-container", body);

  let cityName = elementBuilder("h2", "city", weatherContainer);
  cityName.textContent = `${weatherData.city}`;

  let subContainer = elementBuilder("div", "sub-container", weatherContainer)
  let infoContainer = elementBuilder("div", "info-container", subContainer);

  let date = elementBuilder("p", "todays-date", infoContainer);
  date.textContent = today.date;

  let tempElement = elementBuilder("p", "temp", infoContainer);
  tempElement.textContent = `${today.temp}°`;

  let forecast = elementBuilder("p", "forecast", infoContainer);
  forecast.textContent = `The forecast for today is ${today.info} with a high of ${today.high}° and a low of ${today.low}°.`

  let imgContainer = elementBuilder("div", "img-container", subContainer);
  let weatherImg = elementBuilder("img", "weather-img", imgContainer);
  weatherImg.src = imageGen(today.info);
  weatherImg.id = `${today.info}`;
};

const alertCheck = (alertArray) => {
  if (alertArray) {
    priorElementCheck("alert-container");
    let alertsElement = elementBuilder("div", "alerts-container", body);
    for (let i = 0; i < alertArray.length; i++) {
      let newAlert = alertArray[i];
      let alertContainer = elementBuilder("div", "alert", alertsElement);
      let alertTitle = elementBuilder("p", "alert-title", alertContainer);
      alertTitle.textContent = newAlert.event;
      let alertDesc = elementBuilder("p", "alert-desc", alertContainer);
      alertDesc.textContent = newAlert.desc;
    };
  };
};

const weekElements = (weatherData) => {
  priorElementCheck("forecast-container");
  let forecastContainer = elementBuilder("div", "forecast-container", body);

  for (let i = 1; i < weatherData.forecastArray.length; i++) {
    let day = weatherData.forecastArray[i];
    let mainContainer = elementBuilder("div", "main-container", forecastContainer);
    let infoContainer = elementBuilder("div", "forecast-info", mainContainer);

    let dateElement = elementBuilder("p", "forecast-date", infoContainer);
    dateElement.textContent = `${day.date}`;

    let tempElement = elementBuilder("p", "forecast-temp", infoContainer);
    tempElement.textContent = `${day.temp}°`;

    let highLowElement = elementBuilder("p", "high-low-temp", infoContainer);
    highLowElement.textContent = `High: ${day.high}° / Low: ${day.low}°`;

    let imgContainer = elementBuilder("div", "img-container", mainContainer);
    let weatherImg = elementBuilder("img", "forecast-img", imgContainer);
    weatherImg.src = imageGen(day.info);
    weatherImg.id = `${day.info}`;
  };
};

const errCheck = (error) => {
  priorElementCheck("error");
  priorElementCheck("weather-container");
  priorElementCheck("forecast-container");
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

const getCoords = (data) => {
  for (let prop in data) {
    if (prop === "city") {
      let city = data[prop]
      for (let prop in city) {
        if (prop === "coord") {
          let coord = city[prop];
          return coord
        };
      };
    };
  };
};

const weather = async (term) => {
  let checkedTerm = zipCheck(term);
  let unit = `&units=imperial`;
  try {
    let response = await fetch(`${checkedTerm + unit}&appid=646bad4630202074bd6e0e37126b3203`, {mode: 'cors'});
    let data = await response.json();
    let city = getCity(data);
    let coords = getCoords(data);
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon + unit}&appid=646bad4630202074bd6e0e37126b3203`, {mode: 'cors'});
      let data = await response.json();
      let forecastObj = process(data);
      let forecastArray = forecastObj.forecastArray;
      let alertArray = forecastObj.alertArray;
      let newWeather = { city, forecastArray }
      if (newWeather.city !== undefined) {
        priorElementCheck("alerts-container");
        todaysWeather(newWeather);
        alertCheck(alertArray);
        weekElements(newWeather);
      } else { 
        errCheck(`That search term was not identified. Please enter a city name or zip code.`); 
      };
    } catch (error) {
      if (error == `TypeError: Cannot read properties of undefined (reading 'lat')`) {
        errCheck(`That search term was not identified. Please enter a city name or zip code.`); 
      } else { 
        errCheck(error); 
      };
    };
  } catch (error) {
    errCheck(error);
  }
};

const searchElements = (() => {
  const headContainer = elementBuilder("div", "head-container", body);

  const header = elementBuilder("h1", "head", headContainer);
  header.textContent = "WeatherApp";

  const searchContainer = elementBuilder("div", "search-container", headContainer);

  const searchImg = elementBuilder("img", "search-img", searchContainer);
  searchImg.src = images.search;

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

