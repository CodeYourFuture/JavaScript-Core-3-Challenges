const oWkey = "88642340ea796944c983a55632f5db1e";
const unKey = "UorBPybJa_qjNzgkRZU6IyMLJ_kIk39otdYkBYz5xwU";

window.onload = () => {
  cityNameCoordinates("glasgow");
};

async function cityNameCoordinates(city) {
  try {
    const { description, images } = await fetchData(city);
    updateUI(description, images);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

document.querySelector("#search").addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = document.querySelector("#search-tf").value;
  cityNameCoordinates(city);
});

async function fetchData(city) {
  const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${oWkey}`);
  const geoData = await geoRes.json();
  const { lat, lon } = geoData[0];

  const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${oWkey}`);
  const weatherData = await weatherRes.json();
  const description = weatherData.weather[0].description;

  const imagesRes = await fetch(`https://api.unsplash.com/search/photos?query=${description}&client_id=${unKey}`);
  const imagesData = await imagesRes.json();
  const images = imagesData.results;

  return { description, images };
}

function updateCreditUser(user) {
  const creditUser = document.querySelector("#credit-user");
  creditUser.innerText = `${user.first_name} ${user.last_name}`;
  creditUser.setAttribute("href", user.links.html);
}

function updateMainPhoto(photoUrl, description) {
  const photo = document.querySelector("#photo");
  photo.innerHTML = "";
  const photoImg = document.createElement("img");
  photoImg.src = photoUrl;
  photoImg.alt = description;
  photo.appendChild(photoImg);
}

function updateThumbnails(images, description) {
  const thumbs = document.querySelector("#thumbs");
  thumbs.innerHTML = "";

  for (const image of images) {
    const thumbImg = document.createElement("img");
    thumbImg.classList.add("thumb");
    thumbImg.id = image.id;
    thumbImg.src = image.urls.thumb;
    thumbImg.alt = description;

    thumbImg.addEventListener("click", (e) => {
      const id = e.target.id;
      const thumbs = document.querySelectorAll(".thumb");
      thumbs.forEach((thumb) => {
        thumb.classList.remove("active");
      });

      e.target.classList.add("active");

      const searchedImage = images.find((image) => image.id === id);
      updateMainPhoto(searchedImage.urls.regular, description);
      updateCreditUser(searchedImage.user);
    });

    thumbs.appendChild(thumbImg);
  }
}

function updateUI(description, images) {
  if (images.length > 0) {
    const mainImage = images[0];
    updateMainPhoto(mainImage.urls.regular, description);
    updateCreditUser(mainImage.user);
  }

  updateThumbnails(images, description);
}
