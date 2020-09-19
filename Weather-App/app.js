const request = require('request')

var weather = require("openweather-apis")

weather.setLang("it");

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=rajasthan&&units=metric&APPID=328920666f8770f7287a302198ad888b";
  
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