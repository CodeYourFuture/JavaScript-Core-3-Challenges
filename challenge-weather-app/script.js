fetch(`http://api.openweathermap.org/data/2.5/weather?q=london&APPID=ae83a519b40c97351fe6959e241b5f97`)
    .then((response) => {
      if (response.ok){
        return response.json();
      } else {
        console.log("Error") 
      }
    })
    .then((data) => {
      console.log(data);
    });

    `https://api.unsplash.com/search/photos?query=snow&client_id=QDJfxR32eNpAd3Kr75Crhg5OO1KHsR4OE5PBHpB0R7g`
    