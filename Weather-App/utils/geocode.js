const request = require('request')

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiY29kZXItMDgiLCJhIjoiY2tmOW9yYzJwMG8yZDJycWc2Yjd5OXNxMSJ9.NpCin6ejDHnPE53w_f9awg&limit=1";
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback(
        "Unable to connect to web services! Please check your internet connection!",
        undefined
      );
    } else if (body.features.length === 0) {
      // if the location does not exist
      callback("Unable to find the Location, Try another search!", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode





// const geocodeUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/chandigarh.json?access_token=pk.eyJ1IjoiY29kZXItMDgiLCJhIjoiY2tmOW9yYzJwMG8yZDJycWc2Yjd5OXNxMSJ9.NpCin6ejDHnPE53w_f9awg";
// request({ url: geocodeUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to web services! Please check your internet connection!")
//   } else if (response.body.features.length === 0) {             // if the location does not exist
//     console.log("Unable to find the Location")
//   } else {
//     console.log("The latitude is " + response.body.features[0].center[1])
//     console.log("The longitude is " + response.body.features[0].center[0]);
//   }
//   })