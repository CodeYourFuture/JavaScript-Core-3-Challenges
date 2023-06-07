import { getAPIKey } from "./utils.js";

const EdinburghLatitude = 55.953251;
const EdinburghLongitude = -3.188267;
const weatherAPIKey = getAPIKey("weather");
const unsplashAPIKey = getAPIKey("unsplash");

function setHeroImage() {
  const photoArea = document.getElementById("photo");
  const mainImage = document.createElement("img");
  mainImage.id = "mainImage";
  photoArea.appendChild(mainImage);

  fetch(
    `https://api.unsplash.com/photos/pbxwxwfI0B4/?client_id=${unsplashAPIKey}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      mainImage.src = data.urls.regular;
    });
}
function displayResults(json) {
  let mainImage = document.getElementById("mainImage");
  mainImage.src = json.results[0].urls.regular;
  json.results.forEach((result) => {
    const url = result.urls.small;
    const urlRegular = result.urls.regular;
    const unsplashLink = result.links.html;
    const photographer = result.user.name;
    const photographerPage = result.user.links.html;

    let anImage = document.createElement("img");
    anImage.src = url;
    anImage.addEventListener("click", () => {
      mainImage.src = urlRegular;
    });
    let thumbsArea = document.getElementById("thumbs");
    thumbsArea.appendChild(anImage);
  });
}

async function searchUnsplash(searchQuery) {
  const endpoint = `https://api.unsplash.com/search/photos?query=${searchQuery}&count=5&orientation=landscape&client_id=${unsplashAPIKey}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();
  return json;
}

async function fetchResults(searchQuery) {
  try {
    const results = await searchUnsplash(searchQuery);
    displayResults(results);
  } catch (err) {
    console.log(err);
    alert("Failed to search Unsplash");
  }
}

function getWeatherForCity(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherAPIKey}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let weatherDescription = data.weather[0].description;
      let weatherPara = document.getElementById("conditions");
      weatherPara.textContent = weatherDescription;
      fetchResults(weatherDescription);
    });
}

setHeroImage();

getWeatherForCity(EdinburghLatitude, EdinburghLongitude);
