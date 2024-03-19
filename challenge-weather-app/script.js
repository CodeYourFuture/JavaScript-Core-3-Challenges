const openWeatherAPIKey = "6d0fbc92848b733471a1093b6ce30a2a";
const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherAPIKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Weather data error:", error);
    throw error;
  }
};

const unsplashAccessKey = "ZN0G43FIimsZIYP8Duic-99-R8mkuVHJUSr9mVtThJY";
const fetchImages = async (description) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${description}&client_id=${unsplashAccessKey}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Image fetch error:", error);
    throw error;
  }
};

// changes the main image takes the URL of the clicked image.
const setMainImage = async (imageUrl) => {
  const photoElement = document.getElementById("photo");
  photoElement.innerHTML = `<img src="${imageUrl}" alt="Main Image">`;
};

// displays small images, adds a click event listener to each small images.
const displayThumbnails = (images) => {
  const thumbnailsContainer = document.getElementById("thumbs");
  thumbnailsContainer.innerHTML = "";
  images.forEach((image) => {
    thumbnailsContainer.innerHTML += `<img src="${image.urls.thumb}" alt="${image.alt_description}" class="thumbnail" onclick="setMainImage('${image.urls.regular}')">`;
  });
};

const fetchAndDisplayImages = async (city) => {
  try {
    const weatherData = await fetchWeatherData(city);
    const description = weatherData.weather[0].description;
    const images = await fetchImages(description);

    if (images.length > 0) {
      displayThumbnails(images);
    } else {
      console.error("No weather images");
    }
  } catch (error) {
    console.error("Error fetching and displaying images:", error);
  }
};

const updateWeatherDisplay = (weatherData) => {
  const conditionsElement = document.getElementById("conditions");
  conditionsElement.textContent = `Current weather: ${weatherData.weather[0].description}`;
};

const handleFormSubmit = async (event) => {
  event.preventDefault();
  const cityInput = document.getElementById("search-tf").value.trim();
  if (cityInput) {
    try {
      const weatherData = await fetchWeatherData(cityInput);
      updateWeatherDisplay(weatherData);
      fetchAndDisplayImages(cityInput);
    } catch (error) {
      console.error("Weather data error:", error);
    }
  } else {
    console.error("Invalid city name");
  }
};

const searchForm = document.getElementById("search");
searchForm.addEventListener("submit", handleFormSubmit);

window.addEventListener("load", async () => {
  try {
    const defaultWeatherData = await fetchWeatherData("London");
    updateWeatherDisplay(defaultWeatherData);
    fetchAndDisplayImages("London");
  } catch (error) {
    console.error("Default data error:", error);
  }
});
