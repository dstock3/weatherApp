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

  const weatherData = await response.json();
  for (const prop in weatherData) {
    console.log(`${prop}: ${weatherData[prop]}`);
  };
};

const searchContainer = elementBuilder("div", "search-container", headContainer);

const searchBar = elementBuilder("input", "search", searchContainer);
searchBar.setAttribute("type", "text");
searchBar.setAttribute("placeholder", "Search...");

const button = elementBuilder("button", "search-button", searchContainer)
button.textContent = "Search";

const searchWeather = () => {
    let term = searchBar.value;
    weather(term);
};

button.addEventListener("click", searchWeather);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchWeather();
  };
}, false);

