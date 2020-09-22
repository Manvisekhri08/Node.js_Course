const { request } = require('http')
// Sending HTTP request without a library

const http = require('http')

const url = 'http://api.openweathermap.org/data/2.5/weather?q=chandigarh&&units=metric&APPID=328920666f8770f7287a302198ad888b'

const requests = http.request(url, (response) => {
  let data = "";
    response.on("data", (chunk) => {

      data = data+chunk.toString()
    // console.log(chunk);
  });
    response.on("end", () => {
      console.log(JSON.parse(data))
  });
});

requests.on('error', (error) => {
    console.log('An error occur', error)
})

requests.end()