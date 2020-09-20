const request = require('request')

var weather = require("openweather-apis")

weather.setLang("it");

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=rajasthan&&units=metric&APPID=328920666f8770f7287a302198ad888b";
  
request({ url: url, json: true }, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(response.body.main.humidity)
  if (error) {                                      // If There is no internet connection
    console.log("Unable to connect to web services! Please check your Internet Connection")
  } else if (response.body.error) {
    console.log("Unable to find location")
  } else {
    const data = response.body.main.temp;
    console.log(response.body.weather[0].description)
    console.log(
      "It is currently " +
        (data.toFixed(2)) +
        " degrees out there."
    );
    console.log("The humidity is " + response.body.main.humidity + "%")
  }
})

const geocodeUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/chandigarh.json?access_token=pk.eyJ1IjoiY29kZXItMDgiLCJhIjoiY2tmOW9yYzJwMG8yZDJycWc2Yjd5OXNxMSJ9.NpCin6ejDHnPE53w_f9awg";
  
request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to web services! Please check your internet connection!")
  } else if (response.body.features.length === 0) {             // if the location does not exist
    console.log("Unable to find the Location")
  } else {
    console.log("The latitude is " + response.body.features[0].center[1])
    console.log("The longitude is " + response.body.features[0].center[0] )
  }
})