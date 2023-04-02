// Get DOM elements
const searchInput = document.querySelector('#search-tf');
const searchBtn = document.querySelector('.search__btn');
const photoContainer = document.getElementById('photo');
const thumbsContainer = document.getElementById('thumbs');
const errorMsg = document.querySelector('.error');

// Assign global variables
let city = '';
let photoArr = [];

const fetchCoordinates = async () => {
    try {
        console.log(city);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f86cd0cfb3e6e12fef2e08f796a5d650`;
        const response = await fetch(url);
        if (response.ok) {
            errorMsg.style.display = "none";
            const report = await response.json();
            getDescription(report);
          } else {
            errorMsg.style.display = "";
            throw new Error('Incorrect city name');
          }
    } catch (error) {
        console.error(error);
    }
}

const getDescription = (data) => {
    const { weather: [{ description }] } = data;
    retrievePhoto(description);
}

const retrievePhoto = async (query) => {
    console.log(query);
    try {
        const link = `https://api.unsplash.com/search/photos?page=1&query=${query}&sorientation=landscape`;
        const response = await fetch(link, {
            headers: {
                'Authorization': 'Client-ID Otb34uNCclg2M5AtjX8DlC-i-llRWaOsLJI45KOJtA8'
            }
        });
        const data = await response.json();
        const { results } = data;
        photoArr = results;
        displayPhotos();
    } catch (error) {
        console.error(error);
    }
}

const displayPhotos = () => {
    console.log(photoArr);
    const result = photoArr.reduce((acc, { id, urls: { thumb }}) => {
        const photo = `
        <img id="${id}" src="${thumb}" alt="">`
        return acc + photo;
    }, '')
    thumbsContainer.innerHTML = result;
}

const displaySelectedPhoto = (selectedPhoto) => {
    console.log(selectedPhoto);
    const photo = photoArr.find(({ id }) => id === selectedPhoto)
    const { urls : { regular }} = photo;
    photoContainer.innerHTML = ` <img src="${regular}" alt="">`
}

// List of event listeners
searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    var regex = /^[a-zA-Z ]+$/;
    if (searchInput.value !== '' 
    && regex.test(searchInput.value)
    && searchInput.value !== city) {
        city = searchInput.value.trim();
        fetchCoordinates();
    }
});

thumbsContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
       displaySelectedPhoto( event.target.id);
    }
})
