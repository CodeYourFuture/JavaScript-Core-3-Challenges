let weatherLink = `http://api.openweathermap.org/data/2.5/weather?q=london&APPID=ae83a519b40c97351fe6959e241b5f97`
let weather
let photoLink = `https://api.unsplash.com/search/photos?query=${weather}&client_id=QDJfxR32eNpAd3Kr75Crhg5OO1KHsR4OE5PBHpB0R7g`
let arrayofPhotos
let photo




function photoFetch() {
  fetch(photoLink)
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
photoFetch()



// let photoArea = document.querySelector("#photo")


function displayThePhotosinThumb(array) {
  for (let elemet of array) {
    let thumbs = document.querySelector("#thumbs")
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

getLocationData()
function getLocationData() {
  navigator.geolocation.getCurrentPosition((success) => {
    console.log("ok", success)
    let { latitude, longitude } = success.coords
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=ae83a519b40c97351fe6959e241b5f97`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Error")
        }
      })
      .then((data) => {
        console.log("Data", data);
        displayCarrentWether(data)
        weather = data.weather[0].description

      });

  })
}

function displayCarrentWether(data) {
  let conditionsP = document.querySelector("#conditions")
  let { weather } = data

  conditionsP.innerHTML = `Overcast - ${weather[0].description}`

}



