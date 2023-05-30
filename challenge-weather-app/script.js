let weather
let arrayofPhotos
let photo
let latitude
let longitude


// fetching and search photos with string from description of weather

function photoFetch(weather) {
  fetch(`https://api.unsplash.com/search/photos?query=${weather}&client_id=QDJfxR32eNpAd3Kr75Crhg5OO1KHsR4OE5PBHpB0R7g`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("Error")
      }
    })
    .then((data) => {
      let { results } = data
      arrayofPhotos = results
      console.log("arry", arrayofPhotos)
      displayThePhotosinThumb(arrayofPhotos)

    });
}


let goButton = document.querySelector(".btn")
goButton.addEventListener("click", clickTheButtonGo)

// after clicking Go button

function clickTheButtonGo(event) {
  event.preventDefault()
  let searchBar = document.querySelector("#search-tf").value
  console.log('searchString', searchBar)

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchBar}&limit=5&appid=ae83a519b40c97351fe6959e241b5f97`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("Error")
      }
    })
    .then((data) => {
      console.log("Data Chicago", data[0]);
      latitude = data[0].lat
      longitude = data[0].lat
      getLocationData(latitude, longitude)
    });
}


function displayThePhotosinThumb(array) {
  let thumbs = document.querySelector("#thumbs")
  thumbs.innerHTML = ""
  for (let elemet of array) {
    photo = document.createElement("img")
    let url = elemet.urls.full
    photo.src = url
    thumbs.appendChild(photo)
  }


}
thumbs.addEventListener("click", displayBigPhoto)

function displayBigPhoto(event) {
  if (event.target.nodeName.toLowerCase() == "img") {
    let bigPhotoContainer = document.querySelector("#photo")
    bigPhotoContainer.innerHTML = ""
    let bigPhoto = document.createElement("img")
    let url = event.target.src
    bigPhoto.src = url
    bigPhotoContainer.appendChild(bigPhoto)
  }
}

// taking our location and doing fetch


function getLocationData(latitude, longitude) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=ae83a519b40c97351fe6959e241b5f97`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("Error1")
      }
    })
    .then((success) => {
      displayCarrentWether(success)
      weather = success.weather[0].description
      photoFetch(weather)
    });
}

function displayCarrentWether(info) {
  let conditionsP = document.querySelector("#conditions")
  let { weather } = info

  conditionsP.innerHTML = `Overcast - ${weather[0].description}`
}

  // navigator.geolocation.getCurrentPosition((success) => {
  //   console.log("ok", success)
  //   let { latitude, longitude } = success.coords




