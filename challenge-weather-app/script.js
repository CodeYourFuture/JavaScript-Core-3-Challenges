function setHeroImage() {
  const photoArea = document.getElementById("photo");
  const mainImage = document.createElement("img");
  mainImage.id = "mainImage";
  photoArea.appendChild(mainImage);

  fetch(
    "https://api.unsplash.com/photos/pbxwxwfI0B4/?client_id=QY3ab4KjY2XgLlZGevIgfkFPNWlEk_TWt7k0v3qgROs"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      mainImage.src = data.urls.regular;
    });
}
function displayResults(json) {
  json.results.forEach((result) => {
    const url = result.urls.small;
    const urlRegular = result.urls.regular;
    const unsplashLink = result.links.html;
    const photographer = result.user.name;
    const photographerPage = result.user.links.html;
    console.log(url);
    console.log(unsplashLink);
    console.log(photographer);
    console.log(photographerPage);
    let anImage = document.createElement("img");
    anImage.src = url;
    anImage.addEventListener("click", () => {
      let mainImage = document.getElementById("mainImage");
      mainImage.src = urlRegular;
    });
    let thumbsArea = document.getElementById("thumbs");
    thumbsArea.appendChild(anImage);
  });
}

async function searchUnsplash(searchQuery) {
  const endpoint = `https://api.unsplash.com/search/photos?query=${searchQuery}&count=5&orientation=landscape&client_id=QY3ab4KjY2XgLlZGevIgfkFPNWlEk_TWt7k0v3qgROs`;
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
    console.log(results);
    displayResults(results);
  } catch (err) {
    console.log(err);
    alert("Failed to search Unsplash");
  }
}

function getWeatherForCity(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a8fea833184034bc13063a6d1cd01bad`
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

const EdinburghLatitude = 55.953251;
const EdinburghLongitude = -3.188267;
getWeatherForCity(EdinburghLatitude, EdinburghLongitude);
