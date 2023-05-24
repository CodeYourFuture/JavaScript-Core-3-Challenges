let weatherLink = `http://api.openweathermap.org/data/2.5/weather?q=london&APPID=ae83a519b40c97351fe6959e241b5f97`
let photoLink = `https://api.unsplash.com/search/photos?query=snow&client_id=QDJfxR32eNpAd3Kr75Crhg5OO1KHsR4OE5PBHpB0R7g`
let arrayofPhotos 

let weatherFetch = async () =>{
fetch(weatherLink)
    .then((response) => {
      if (response.ok){
        return response.json();
      } else {
        console.log("Error") 
      }
    })
    .then((data) => {
      console.log("typeof", data);
      return data
    });   
}

weatherFetch ()


function photoFetch (){
fetch(photoLink)
    .then((response) => {
      if (response.ok){
        return response.json();
      } else {
        console.log("Error") 
      }
    })
    .then((data) => {
        let {results} = data
        arrayofPhotos = results
        console.log("arry", arrayofPhotos)
        displayThePhotos(arrayofPhotos)
    });   
}
photoFetch()



// let photoArea = document.querySelector("#photo")


function displayThePhotos(array){
    
    for (let elemet of array){
        let thumbs = document.querySelector("#thumbs")
        let photo = document.createElement("img")
        let url = elemet.urls.thumb
        photo.src = url
        thumbs.appendChild(photo)
    }
  
    

}



    