const express = require('express')

const path = require('path')

const hbs = require('hbs')

const geocode = require('./utils/geocode')

const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express Configuration
const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set("views", viewsPath);

// Setups partials handlebars
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectory));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Manvi Sekhri'
    })
})

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Manvi Sekhri",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "Manvi Sekhri",
    helperText: "This is a help page"
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    })
  }

  geocode(req.query.address, (error, { location, latitude, longitude } = {}) => {
    if (error) {
      return res.send({
        error,
      });
    }
    forecast(location, (error, forecastdata) => {
      if (error) {
        return res.send({
          error,
        });
      }
      res.send({
        forecast: forecastdata,
        location,
        latitude,
        longitude,
        address: req.query.address
      })
    })
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search item'
    })
  }
  console.log(req.query.search)
  res.send({
    products: []
  })
})

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Manvi Sekhri",
    errorMessage: "Help article not found!",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Manvi Sekhri",
    errorMessage: "Page not found!",
  });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000!')
})


