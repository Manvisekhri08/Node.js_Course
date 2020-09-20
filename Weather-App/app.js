const request = require('request')

var weather = require("openweather-apis")

weather.setLang("it");

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=rajasthan&&units=metric&APPID=<your_appid>";
  
request({ url: url, json: true }, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(response.body.main.humidity)
    const data = response.body.main.temp;
    console.log(response.body.weather[0].description)
    console.log(
      "It is currently " +
        (data.toFixed(2)) +
        " degrees out there."
    );
    console.log("The humidity is "+ response.body.main.humidity+"%")
})

const geocodeUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=<your_token>";
  
request({ url: geocodeUrl, json: true }, (error, response) => {
    console.log("The latitude is " + response.body.features[0].center[1])
    console.log(
      "The longitude is " + response.body.features[0].center[0]
    );
})
