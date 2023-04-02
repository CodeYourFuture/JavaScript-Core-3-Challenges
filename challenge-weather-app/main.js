// Get DOM elements
const searchInput = document.querySelector('#search-tf');
const searchBtn = document.querySelector('.search__btn')

// Assign global variables
let url = 'https://api.openweathermap.org/geo/1.0/direct?q=london&limit=1&appid=f86cd0cfb3e6e12fef2e08f796a5d650';
let latitude = '';
let longitude = '';
let descriptionText = '';

const fetchCoordinates = async () => {
    const response = await fetch(url);
    const report = await response.json();
    getCoordinates(report);
}

const retrieveData = async () => {
    const link = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f86cd0cfb3e6e12fef2e08f796a5d650`;
    const response = await fetch(link);
    const data = await response.json();
    getDescription(data);
}

const retrievePhoto = async () => {
    const link = 'https://api.unsplash.com/photos/?';
    const response = await fetch(link);
    const data = await response.json();
    console.log(data);
}

const getCoordinates = (report) => {
    const [{ lat, lon }] = report;
    longitude = lon;
    latitude = lat;
    retrieveData()
}

const getDescription = (data) => {
    const { weather: [{ description }] } = data;
    descriptionText = description;
    console.log(description);
}

// List of event listeners
searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    var regex = /^[a-zA-Z]+$/;
    if (searchInput.value !== '' && regex.test(searchInput.value) ) {
        fetchCoordinates();
    }
})
