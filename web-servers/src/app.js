const express = require('express')

const path = require('path')

const hbs = require('hbs')

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
  });
});

app.get("/weather", (req, res) => {
    res.send([{
        forecast: 'Cloudy'
    }, {
        location: 'Pasadena'
    }]);                  // arry of objects
});

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
    console.log('SErver is up on port 3000!')
})



// app.get('', (req, res) => {
//     res.send('<h1>hello express!</h1>')  // html
// })

// app.get("help.html", (req, res) => {
//     res.send({                         // json
//         name: 'Manvi',
//         age: 20
//   });
// });

// app.get("about.html", (req, res) => {
//   res.send("<h1>About</h1>");
// });
