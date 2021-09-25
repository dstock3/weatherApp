import _ from 'lodash';
import './style.css';

function elementBuilder (elType, className, parent) {
  const newElement = document.createElement(elType);
  newElement.classList.add(className);
  parent.appendChild(newElement);
  return newElement;
};

const body = document.querySelector("body");

const weather = async (term) => {
  //const weatherInfo = elementBuilder("p", "weather-info", body);

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=646bad4630202074bd6e0e37126b3203`, {mode: 'cors'});

  const weatherData = await response.json();
  console.log(weatherData)
  
  //weatherInfo.textContent = weatherData.data.images.original.url;
};

const searchBar = elementBuilder("input", "search", body);
searchBar.setAttribute("type", "text");
searchBar.setAttribute("placeholder", "Search...");

const button = elementBuilder("button", "img-gen", body)
button.textContent = "Search";

const searchWeather = () => {
    let term = searchBar.value;
    weather(term);
};

button.addEventListener("click", searchWeather);
