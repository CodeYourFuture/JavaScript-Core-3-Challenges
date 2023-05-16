//  API keys and base URLs-Code
const weatherAPIKey =
  "4049c016776275cd6c7ecfb5c50961fa";
const unsplashAccessKey =
  "https://api.unsplash.com/search/photos?query=snow&client_id=l9KNERJAbBOq_Uy7NjwLsd4sYA0c9ZBdWDIItQrpshY";
const weatherBaseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const unsplashBaseURL = "https://api.unsplash.com/search/photos";

// Select DOM elements-Code
const photoElement = document.getElementById("photo");
const conditionsElement = document.getElementById("conditions");
const creditUserElement = document.getElementById("credit-user");
const creditPlatformElement = document.getElementById("credit-platform");
const thumbsElement = document.getElementById("thumbs");
const searchForm = document.getElementById("search");

// Function to fetch weather data from OpenWeatherMap API-Code
const fetchWeatherData = async (city) => {
  try {
    const url = `${weatherBaseURL}${city}&APPID=${weatherAPIKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

// Function to fetch image data from Unsplash API-code
const fetchImageData = async (query) => {
  try {
    const url = `${unsplashBaseURL}?query=${query}&client_id=${unsplashAccessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching image data:", error);
  }
};

// Function to display main photo and thumbnails-code
const displayPhotos = (mainPhoto, thumbnails) => {
  photoElement.style.backgroundImage = `url(${mainPhoto})`;
  thumbsElement.innerHTML = thumbnails
    .map(
      (thumbnail) => `<img class="thumb" src="${thumbnail}" alt="Thumbnail" />`
    )
    .join(" ");
};

// Function to update UI with weather data and images-code

const updateUI = async (city) => {
  try {
    const weatherData = await fetchWeatherData(city);

    if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
      const weatherDescription = weatherData.weather[0].description;
      const imageData = await fetchImageData(weatherDescription);

      // Display weather conditions-code
      conditionsElement.textContent = weatherDescription;

      // Display image data-code
      if (imageData && imageData.results && imageData.results.length > 0) {
        const mainPhoto = imageData.results[0].urls.regular;
        const thumbnails = imageData.results.map((result) => result.urls.thumb);
        const creditUser = imageData.results[0].user.name;
        const creditLink = imageData.results[0].user.links.html;
        creditUserElement.textContent = creditUser;
        creditUserElement.href = creditLink;
        creditPlatformElement.href = "https://unsplash.com";

        // Display-photos-code
        displayPhotos(mainPhoto, thumbnails);
      } else {
        console.error("Error: No image data found");
      }
    } else {
      console.error("Error: No weather data found");
    }
  } catch (error) {
    console.error("Error updating UI:", error);
  }
};

// Event listener for form submission code
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  if (city) {
    updateUI(city);
  } else {
    console.error("Error: Please enter a city name");
  }
  // Clear the input field after submission
  e.target.elements.city.value = " ";
});

updateUI("London");
