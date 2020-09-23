const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('hello express!')
})

app.get("/help", (req, res) => {
  res.send("help");
});

app.get("/weather", (req, res) => {
  res.send("weather");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(3000, () => {
    console.log('SErver is up on port 3000!')
})