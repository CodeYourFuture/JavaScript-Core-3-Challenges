const openWeatherAPIKey = '6d0fbc92848b733471a1093b6ce30a2a';

const fetchWeatherData = async (city = 'London') => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${openWeatherAPIKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

const unsplashAccessKey = 'ZN0G43FIimsZIYP8Duic-99-R8mkuVHJUSr9mVtThJY';

const fetchImages = async (description) => {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${description}&client_id=${unsplashAccessKey}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};