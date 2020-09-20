const request = require('request')

const forecast = (address, callback) => {
    const url =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        encodeURIComponent(address) +
        "&&units=metric&APPID=328920666f8770f7287a302198ad888b";
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(
                "Unable to connect to web services! Please check your internet connection!",
                undefined
            );
        } else if (response.body.error) {
            callback(
                "Unable to find the Location, Try another search!",
                undefined
            );
        } else {
            callback(undefined, {
                 description: 'The weather description: ' + response.body.weather[0].description,
                humidity: 'The humidity level is ' + response.body.main.humidity,
                temperature:'The temperature out there is ' + response.body.main.temp + '°C'
            });
        }
    });
};

module.exports = forecast;

// const url =
//   "http://api.openweathermap.org/data/2.5/weather?q=rajasthan&&units=metric&APPID=328920666f8770f7287a302198ad888b";
  
// request({ url: url, json: true }, (error, response) => {
//     // const data = JSON.parse(response.body)
//     // console.log(response.body.main.humidity)
//   if (error) {                                      // If There is no internet connection
//     console.log("Unable to connect to web services! Please check your Internet Connection")
//   } else if (response.body.error) {
//     console.log("Unable to find location")
//   } else {
//     const data = response.body.main.temp;
//     console.log(response.body.weather[0].description)
//     console.log(
//       "It is currently " +
//         (data.toFixed(2)) +
//         " degrees out there."
//     );
//     console.log("The humidity is " + response.body.main.humidity + "%")
//   }
// })