const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>hello express!</h1>')  // html
})

app.get("/help", (req, res) => {
    res.send({                         // json
        name: 'Manvi',
        age: 20
  });
});

app.get("/weather", (req, res) => {
    res.send([{
        forecast: 'Cloudy'
    }, {
        location: 'Pasadena'
    }]);                  // arry of objects
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.listen(3000, () => {
    console.log('SErver is up on port 3000!')
})