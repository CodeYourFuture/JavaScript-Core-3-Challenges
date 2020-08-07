# Mini-weather

![Screenshot](assets/meteoropolis.png)

[Click here for live demo](https://mini-weatherapp.herokuapp.com/)

This app blends data from [openweathermap.org](https://openweathermap.org/) and
[Unsplash](https://unsplash.com/developers) to create a visual depiction of the current weather in your area.

## Set-up

- Fork and clone the repo

- You will need to sign up for both services to get an API key to use each service.

  - **Open Weather** - sign up for API key at [https://openweathermap.org/appid](https://openweathermap.org/appid) and append it to URL as `APPID` URL parameter. For example, `http://api.openweathermap.org/data/2.5/weather?q=london&APPID=ABC` where `ABC` is the API key you were provided.
  - **Unsplash** - sign up for Unsplash at [https://unsplash.com/join](https://unsplash.com/join) and register your app. You will receive an Access Key which you should append it to the URL as `client_id` URL param. For example, `https://api.unsplash.com/search/photos?query=snow&client_id=XYZ` where `XYZ` is your Access Key.

- The base HTML and CSS have been supplied if you wish to focus on the programming and not the UI, but you should feel free to customise your application as you see fit. You can insert the main photo into the element with the id `photos` and thumbnails into the element with id `thumbs`. Use developer tools to inspect the structure of HTML in working example to get a sense of what it required.

## Objectives

- [ ] Use `fetch` to retrieve the weather for a single day. You can see the documentation at [https://openweathermap.org/current](https://openweathermap.org/current). For now, we'll set London or another location of your choice as the default.

- [ ] Once you've retrieved the weather data, use its `description` property to get matching images from Unsplash. You can see the documentation for image search at [https://unsplash.com/documentation#search-photos](https://unsplash.com/documentation#search-photos).

- [ ] Display the images as a gallery of clickable thumbnails (clicking loads the main image)

- [ ] Commit code regularly, push and create a pull request so we can see how you got on

## Stretch goals

- [ ] Use the input field that lets us see what the weather is like in other cities

- [ ] Add a feature of your choice

- [ ] Display photographer credits in bottom right hand corner with link to their portfolio on Unsplash

- [ ] Display white border around thumbnail of image currently displayed as main image using `active` class

You may need to use data attributes as part of the exercise. You can see more info about them at [https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).
